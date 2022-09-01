import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Import for Cart

import { useCart } from "../../contexts/CartContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  const { addProductToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div>
      <Card sx={{ maxWidth: 350, height: "450px", margin: "55px" }}>
        <CardMedia
          component="img"
          height="330"
          width="240"
          image={item.picture}
          margin="5px"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price:{item.price}$
          </Typography>

          <Button
            onClick={() => navigate(`/details/${item.id}`)}
            variant="contained"
            color="success"
            sx={{ margin: 0.5 }}
            size="small"
          >
            Details
          </Button>
          <Button
            onClick={() => navigate(`/edit/${item.id}`)}
            variant="contained"
            sx={{ margin: 0.5 }}
            size="small"
          >
            Edit
          </Button>

          <Button
            variant="contained"
            sx={{ margin: 0.5 }}
            onClick={() => {
              addProductToCart(item);
            }}
            size="small"
          >
            Cart
          </Button>
          <Button
            onClick={() => deleteProduct(item.id)}
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
  );
};

export default ProductCard;
