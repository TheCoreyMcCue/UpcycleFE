import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'


const ListingPage = () => {
    let { id } = useParams();

  const [listing, setListing] = useState([]);
        console.log(id);

  useEffect(() => {
    const fetchListing = async () => {
      const { data } = await axios.get(`/api/listings/${id}`);
      setListing(data);
    };
    fetchListing();
  }, [id]);
  return <div>listing: {listing.title}</div>;
};

export default ListingPage;
