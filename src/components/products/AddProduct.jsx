import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

//card start

//card end

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });
  const [product2, setProduct2] = useState({
    name: "Product",

    price: "Product Price",
    picture:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
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

  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexWrap: "wrap",
        marginTop: "40px",
        margin: "0 auto",
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
        <h3> Add Product</h3>
        <TextField
          style={{ margin: "5px", width: "90%" }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleInp}
        />

        <TextField
          style={{ margin: "5px", width: "90%" }}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          onChange={handleInp}
        />
        <TextField
          style={{ margin: "5px", width: "90%" }}
          id="outlined-basic"
          label="Price"
          variant="outlined"
          name="price"
          onChange={handleInp}
        />

        <TextField
          style={{ margin: "5px", width: "90%" }}
          id="outlined-basic"
          label="Picture"
          variant="outlined"
          name="picture"
          onChange={handleInp}
        />

        <TextField
          style={{ margin: "5px", width: "90%" }}
          id="outlined-basic"
          label="Type"
          variant="outlined"
          name="type"
          onChange={handleInp}
        />

        <Button
          style={{ margin: "5px", width: "90%" }}
          size="large"
          variant="contained"
          onClick={() => {
            addProduct(product);
            navigate("/products");
          }}
        >
          Add Product
        </Button>
        {/* <PreviewImage product={product} /> */}
        {/*===================================================== */}

        {/* {product.picture ? (
          <img src={product.picture} alt="" />
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8t5dHD-BcXAvHvA4XIm-cNXfPLO4MWt6gKKIQwgom--CtFW0HAB7C_lK7ZyAMXqwkBEg&usqp=CAU"
            alt=""
          />
        )}

        <p>{product.name}</p> */}
      </div>
      <div>
        <Card sx={{ height: "450px", margin: "55px" }}>
          {product.picture ? (
            <CardMedia
              component="img"
              height="330"
              width="240"
              image={product.picture}
              margin="5px"
            />
          ) : (
            <CardMedia
              component="img"
              height="330"
              width="240"
              image={product2.picture}
              margin="5px"
            />
          )}

          <CardContent>
            {product.name ? (
              <Typography gutterBottom variant="h7" component="div">
                {product.name}
              </Typography>
            ) : (
              <Typography gutterBottom variant="h7" component="div">
                {product2.name}
              </Typography>
            )}
            {product.price ? (
              <Typography gutterBottom variant="h7" component="div">
                {product.price}$
              </Typography>
            ) : (
              <Typography gutterBottom variant="h7" component="div">
                {product2.price}$
              </Typography>
            )}
            <Button
              // onClick={() => navigate(`/details/${item.id}`)}
              variant="contained"
              color="success"
              sx={{ margin: 0.5 }}
              size="small"
            >
              Details
            </Button>
            <Button
              // onClick={() => navigate(`/edit/${item.id}`)}
              variant="contained"
              sx={{ margin: 0.5 }}
              size="small"
            >
              Edit
            </Button>

            <Button variant="contained" sx={{ margin: 0.5 }} size="small">
              Cart
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ margin: 0.5 }}
              size="small"
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
};

export default AddProduct;
