import React, { useState, useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    setProduct(productDetails);
  }, productDetails);
  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  const AddProduct = () => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
      name: "",
      description: "",
      price: "",
      picture: "",
      type: "",
    });

    const handleInp = (e) => {
      if (e.target.name === "price") {
        let obj = {
          ...product,
          [e.target.name]: Number(e.target.value),
        };
        setProduct(obj);
      } else {
        let obj = {
          ...product,
          [e.target.name]: e.target.value,
        };
        setProduct(obj);
      }
    };
  };

  return (
    <>
      {product ? (
        <div>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "40px",
              border: " 1px solid #D3D3D3",
              "&:hover": { border: " 1.5px solid #808080" },
              borderRadius: "10px",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "60%",
              }}
            >
              <h3>Edit Product</h3>
              <TextField
                style={{ margin: "5px", width: "90%" }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={product.name}
                name="name"
                onChange={handleInp}
              />
              <TextField
                style={{ margin: "5px", width: "90%" }}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={product.description}
                name="description"
                onChange={handleInp}
              />
              <TextField
                style={{ margin: "5px", width: "90%" }}
                id="outlined-basic"
                label="Price"
                value={product.price}
                variant="outlined"
                name="price"
                onChange={handleInp}
              />

              <TextField
                style={{ margin: "5px", width: "90%" }}
                id="outlined-basic"
                label="Picture"
                value={product.picture}
                variant="outlined"
                name="picture"
                onChange={handleInp}
              />

              <TextField
                style={{ margin: "5px", width: "90%" }}
                id="outlined-basic"
                label="Type"
                variant="outlined"
                value={product.type}
                name="type"
                onChange={handleInp}
              />

              <Button
                style={{ margin: "5px", width: "90%" }}
                size="large"
                variant="contained"
                onClick={() => {
                  saveEditedProduct(product);
                  navigate("/products");
                }}
              >
                Save Changes
              </Button>
            </div>
          </Box>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
};

export default EditProduct;
