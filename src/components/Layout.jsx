import React from "react";
import { Link } from "react-router-dom";
import "../global.css";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="md">
      <div className="app">
        <Box>
          <AppBar position="static" sx={{ backgroundColor: "lightgray" }}>
            <Toolbar
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <header>
                  <Link
                    to="/"
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Ecommerce App
                  </Link>
                </header>
              </div>
              <div>
                <Link to="/checkout">
                  <ShoppingCartIcon style={{ color: "#000" }} />
                </Link>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
        <main>{children}</main>
      </div>
    </Container>
  );
};

export default Layout;
