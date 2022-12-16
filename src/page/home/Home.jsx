import HomeItems from "components/homeItems";
import Pagination from "@mui/material/Pagination";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilms } from "store/selector";
import { tvBlandThunk } from "store/slice/thunk";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectFilms);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(18);

  const filmItem = () => items?.slice(prev, next);

  const nextFilms = (page) => {
    setPrev(page === 1 ? 0 : (page - 1) * 18);
    setNext(page * 18);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [prev, next]);

  useEffect(() => {
    dispatch(tvBlandThunk());
  }, [dispatch]);

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
          <Pagination count={Math.ceil(items?.length / 18)} shape="rounded" onChange={(_, page) => nextFilms(page)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
