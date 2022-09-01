import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
  calcTotalCount,
} from "../helpers/functions";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
  count: JSON.parse(localStorage.getItem("sum")),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };

    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };

    case CART.GET_COUNT:
      return { ...state, count: action.payload };

    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // get cart

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    getCount();

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  function deleteProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();

    getCount();

    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: cart,
    });
  }

  const getCount = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });

    let array = [];
    console.log(cart);
    cart.products.map((item) => {
      array.push(item.count++);
    });

    let sum = array.reduce((a, b) => a + b, 0);

    localStorage.setItem("sum", JSON.stringify(sum));

    dispatch({
      type: CART.GET_COUNT,
      payload: sum,
    });

    // return sum;
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }

      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    getCount();

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const values = {
    getCart,
    addProductToCart,
    deleteProductInCart,
    changeProductCount,
    getCount,
    cart: state.cart,
    count: state.count,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
