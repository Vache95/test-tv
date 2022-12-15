import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

const Item = ({ image, name, rating }) => {
  const navigate = useNavigate();
  const TvInfo = () => {
    navigate("/info");
  };
  return (
    <div className="home__item">
      <div className="home__item-img" onClick={TvInfo}>
        <img src={image.medium} alt="" />
      </div>
      <div className="home__item-reting">
        <Rating name="read-only" precision={rating} readOnly />
        {/* <span>********</span> */}
      </div>
      <div className="home__item-text">
        {/* <p>this is the life of the TV show which is very long</p> */}
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Item;
