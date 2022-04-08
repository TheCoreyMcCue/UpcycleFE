/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./Listing.css";
import { useStateValue } from "../../State/StateProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";

const listing = ({ id, title, image, price, rating, description }) => {
  const [{ cart }, dispatch] = useStateValue();
  const [toggleDescription, setToggleDescription] = useState(true);

  console.log("cart", cart);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });
  };
  return (
    <Card sx={{ maxWidth: "100vw", margin: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt={`image of ${title}`}
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
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${price}
          </Typography>
          <Typography
            onClick={() => setToggleDescription(!toggleDescription)}
            sx={
              toggleDescription && {
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
              }
            }
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
          <div
            style={{
              marginTop: "5%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button variant="contained" color="success" onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default listing;
