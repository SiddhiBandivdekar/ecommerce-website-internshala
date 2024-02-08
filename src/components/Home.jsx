import React from "react";
import categories from "../data/categories.json";
import { Link } from "react-router-dom";
import { Card, List, ListItem, ListItemText, Typography } from "@mui/material";

const Home = () => {
  return (
    <Card sx={{ minHeight: "800px", padding: "20px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 700, color: "gray" }}
      >
        Home
      </Typography>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id} disablePadding>
            <ListItemText>
              <Link
                to={`/category/${category.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography variant="body1">{category.name}</Typography>
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Home;
