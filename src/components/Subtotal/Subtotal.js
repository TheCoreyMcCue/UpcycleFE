import React from "react";
import CurrencyFormat from "react-currency-format";
import uuid from "react-uuid";
import "./Subtotal.css";
import { useStateValue } from "../../State/StateProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Subtotal = ({ handleCartTotal }) => {
  const [{ cart }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div style={{ width: "100%" }}>
              Subtotal ({cart?.length} items):{" "}
              <strong>${handleCartTotal(cart)}</strong>
              {cart.map((item) => (
                <Card
                  key={uuid()}
                  sx={{ width: "100%", marginTop: 1, marginBottom: 1 }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="150"
                      image={item.image}
                      alt={`image of ${item.title}`}
                    />
                    <CardContent>
                      <Typography
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {item.title}
                        <DeleteIcon />
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        ${item.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </div>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Subtotal;
