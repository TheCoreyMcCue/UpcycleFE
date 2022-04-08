import React from "react";
import "./Home.css";
import Listing from "../Listing/Listing";
import uuid from "react-uuid";
import { Grid } from "@mui/material";
// import logo from "../../assets/logos/UpcycleSkate-logos_white.png";

const Home = () => {
  const description =
    "Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica";
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
          <Grid item xs={2} sm={4} md={4}>
            <Listing
              title="Complete Element Deck with Spitfire Wheels"
              id={uuid()}
              image="https://imgs.search.brave.com/e8XvhwcJ1pIxbd4wXj8HzEpjDsIHfCtB3ZgHQW3Hjl4/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93d3cu/bmF0aXZlc2thdGVz/dG9yZS5jby51ay9p/bWFnZXMvZHllLXRy/aXBwaW4tY29tcGxl/dGUtc2thdGVib2Fy/ZC03LTc1LXAzNjc0/Ny05MTIxOF9pbWFn/ZS5qcGc"
              price={120}
              rating={4}
              description={description}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Listing
              title="Complete Custom Burton Deck"
              id={uuid()}
              image="https://imgs.search.brave.com/bSVOiN3eN1b-3pWeyDa0jO-HMD0wfp6wOWXdytsnG7U/rs:fit:1200:757:1/g:ce/aHR0cHM6Ly93d3cu/cGV0ZXJ2ZXJkb25l/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNC8wOC9BTkRS/MDUyMC5qcGc"
              price={85}
              rating={5}
              description={description}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Listing
              title="Rocket Powered Custom Build"
              id={uuid()}
              image="https://imgs.search.brave.com/-x4cCGSOunjxt91o-cT4xPs_OFtCfbbC8jPHS7GhQXg/rs:fit:1200:908:1/g:ce/aHR0cHM6Ly9ldm9s/dmVmb3J1bXMuY29t/L2F0dGFjaG1lbnRz/L3VwbG9hZF8yMDE2/LTEyLTExXzAtMzIt/MzUtcG5nLjY2My8"
              price={99}
              rating={3}
              description={description}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Listing
              title="Street Deck Complete"
              id={uuid()}
              image="https://imgs.search.brave.com/vMVe7S1wzhqYOlazOXwj6X3LU3h_KSZrg58czco0G6U/rs:fit:1200:1152:1/g:ce/aHR0cHM6Ly9jb250/ZW50Lmluc3RydWN0/YWJsZXMuY29tL09S/SUcvRkVELzhZWVIv/SFpJOUJOVlkvRkVE/OFlZUkhaSTlCTlZZ/LmpwZz9mcmFtZT0x"
              price={30}
              rating={5}
              description={description}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Listing
              title="Old School Cruiser"
              id={uuid()}
              image="https://imgs.search.brave.com/aEoDgPtZ-KnhNqSph3ijl7HhBEH9OpWuvkJJ6raqOYE/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9ibG9n/LmFkYWZydWl0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wOC9pbWdfOTE2/Mi5qcGc"
              price={145}
              rating={5}
              description={description}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Listing
              title="Custom Joe Mamma Deck"
              id={uuid()}
              image="https://imgs.search.brave.com/x9BEjMesrUCKMTk0_3LgwZD6fSKz7dc3GylnG49CBMQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Ym9hcmRwdXNoZXIu/Y29tL2Jsb2cvd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMTIv/Ym9hcmRwdXNoZXIt/ZGlnaXRhbC1jYXJi/aW5lLWRlYWQtc2Ft/dXJhaS1za3VsbC1j/dXN0b20tc2thdGVi/b2FyZC1iaWcuanBn"
              price={80}
              rating={4}
              description={description}
            />
          </Grid>
          )
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
