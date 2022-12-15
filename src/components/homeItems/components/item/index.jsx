import React from 'react';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

const Item = ({ image, name, id,starringName }) => {
  const navigate = useNavigate();
  const TvInfo = () => {
    navigate('/info', { state:{ id ,starringName} });
  };
  return (
    <div className="home__item">
      <div className="home__item-img" onClick={TvInfo}>
        <img src={image.image?.medium} alt="" />
      </div>
      <div className="home__item-reting">
        <Rating name="size-small" defaultValue={null} size="small" />
      </div>
      <div className="home__item-text">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Item;
