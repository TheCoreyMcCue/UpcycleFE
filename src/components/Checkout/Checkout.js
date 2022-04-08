import React from "react";
import { useStateValue } from "../../State/StateProvider";

import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
// import banner from "../../assets/photos/skateboard1.png";

const Checkoout = () => {
  const [{ cart }] = useStateValue();

  const handleCartTotal = (cart) => {
    let total = 0;
    // eslint-disable-next-line array-callback-return
    cart.map((item) => {
      total += item.price;
    });
    return total;
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      {cart.length < 1 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          <Grid item xs={5.5} sm={6} md={6}>
            <Subtotal handleCartTotal={handleCartTotal} />
          </Grid>
          <Grid item xs={5.9} sm={6} md={4}>
            <Item>
              <div>
                <h2>Summary of purchase:</h2>
                <ListItemButton
                  style={{ display: "flex", flexDirection: "column" }}
                  component="a"
                  href="#simple-list"
                >
                  {cart.map((item, index) => (
                    <div key={index} style={{ display: "flex" }}>
                      <ListItemText
                        style={{ fontWeight: 700 }}
                        key={`${index}_title`}
                        primary={item.title}
                      />
                      <ListItemText
                        key={`${index}_price`}
                        primary={`: $${item.price}`}
                      />
                    </div>
                  ))}
                  <div>
                    <section
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <ListItemText primary="Tax: " />
                        <ListItemText primary="$4.78" />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <ListItemText primary="Shipping " />
                        <ListItemText primary=": $10" />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <ListItemText
                          primary={`Total (${cart?.length} items)`}
                        />
                        <ListItemText>
                          {`: $${handleCartTotal(cart) + 14.78}`}
                        </ListItemText>
                      </div>
                    </section>
                  </div>
                </ListItemButton>
                <Typography>
                  <Button variant="contained" style={{ color: "white" }}>
                    Proceed to Checkout
                  </Button>
                </Typography>
              </div>
            </Item>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Checkoout;
