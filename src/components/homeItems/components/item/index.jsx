import React from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

const Item = ({ image, name, id, starringName, rating }) => {
  const navigate = useNavigate();
  const TvInfo = () => {
    navigate(`/info/${id}`, { state: { id, starringName, rating } });
  };
  return (
    <div className="home__item">
      <div className="home__item-img" onClick={TvInfo}>
        <img src={image.image?.medium} alt="" />
      </div>
      <div className="home__item-reting">
        <Rating name="size-small" defaultValue={rating} size="small" max={10} />
      </div>
      <div className="home__item-text">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Item;
