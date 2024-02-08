import React, { useContext } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const itemsInCart = cartItems.length > 0;

  return (
    <div style={{ padding: "20px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 700, color: "gray" }}
      >
        Checkout
      </Typography>
      {itemsInCart ? (
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body1">
                  {item.quantity} x {item.price} {item.currency}
                </Typography>
                <IconButton
                  edge="end"
                  onClick={() => handleIncreaseQuantity(item.id)}
                  sx={{ backgroundColor: "lightgray" }}
                >
                  <Add />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={() => handleDecreaseQuantity(item.id)}
                  sx={{ backgroundColor: "lightgray", marginLeft: "30px" }}
                >
                  <Remove />
                </IconButton>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <Delete sx={{ color: "red" }} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">Add items to your cart</Typography>
      )}
    </div>
  );
};

export default Checkout;
