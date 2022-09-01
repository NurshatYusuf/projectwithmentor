export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

export const calcSubPrice = (product) => +product.count * product.item.price;

export const calcTotalPrice = (products) => {
  return products.reduce((pV, cur) => {
    return (pV += cur.subPrice);
  }, 0);
};
// export const calcTotalCount = (products) => {
//   let array = [];
//   products.map((item) => {
//     array.push(item.count++);
//   });
//   let sum = array.reduce((a, b) => a + b, 0);
//   return sum;
// };
