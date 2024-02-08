import React, { useContext, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import products from "../data/products.json";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Category = () => {
  const { categoryId } = useParams();
  const catProducts = products.filter((prod) => prod.categoryId === categoryId);
  const { addToCart } = useContext(CartContext);

  const [deliveryOnly, setDeliveryOnly] = useState(false);

  const toggleDeliveryFilter = () => {
    setDeliveryOnly(!deliveryOnly);
  };

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 700, color: "gray" }}
      >
        Category
      </Typography>
      <FormControlLabel
        control={
          <Checkbox checked={deliveryOnly} onChange={toggleDeliveryFilter} />
        }
        label="Delivery Only"
      />
      <Grid container spacing={2}>
        {catProducts
          .filter((product) => !deliveryOnly || product.delivery)
          .map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  style={{ maxWidth: "100%", flex: "1 1 auto" }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {product.price} {product.currency}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleAddToCart(product.id)}
                    sx={{
                      backgroundColor: "lightgray",
                      color: "black",
                      padding: "10px",
                    }}
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Category;
