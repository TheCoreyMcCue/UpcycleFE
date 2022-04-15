import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Grid } from "@mui/material";
import Listing from "../Listing/Listing";
import "./Home.css";
// import { products } from "./products";
// import logo from "../../assets/logos/UpcycleSkate-logos_white.png";

const Home = () => {
  const [listings, setListings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const { data } = await axios.get("/api/listings");
      setListings(data);
    };
    fetchListings();
  }, []);
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          alt=""
        />
        {/* <img src={logo} alt="Upcycle Skate logo" className="home__logo" /> */}
      </div>
      <Grid container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {listings.map((listing) => (
            <Grid onClick={() => navigate(`/listing/${listing.id}`)} key={uuid()} item xs={2} sm={4} md={4}>
              <Listing
                title={listing.title}
                image={listing.image}
                id={listing.id}
                price={listing.price}
                rating={listing.rating}
                description={listing.description}
              />
            </Grid>
          ))}
          )
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
