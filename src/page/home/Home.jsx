import HomeItems from 'components/homeItems';
import Pagination from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilms } from 'store/selector';
import { tvBlandThunk } from 'store/slice/tvSlice';
import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectFilms);
  const filmItem = items?.slice(0, 18);

  const nextFilms = () => {};
  useEffect(() => {
    dispatch(tvBlandThunk());
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__h3">
          <h3>Last Added Shows</h3>
        </div>
        <div className="home__content">
          <HomeItems filmItem={filmItem} />
        </div>
        <div className="home__pagination">
          <Pagination count={4} shape="rounded" onClick={nextFilms} />
        </div>
      </div>
    </div>
  );
};

export default Home;
