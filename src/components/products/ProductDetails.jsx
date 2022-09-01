import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import "../../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();

  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      {productDetails ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <img
              src={productDetails.picture}
              alt="Error"
              width="700"
              height="800"
            />
          </div>
          <div id="Description">
            <h2>{productDetails.name}</h2>
            <p id="details">{productDetails.description}</p>
            <h3 style={{ color: "#565656" }}>Price:{productDetails.price}$</h3>
            <h3 style={{ color: "#565656" }}>Category:{productDetails.type}</h3>
          </div>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
};

export default ProductDetails;
