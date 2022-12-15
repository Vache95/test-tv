import HomeItems from "components/homeItems";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tvBlandThunk } from "store/slice/tvSlice";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.tvBland);

  const testItem = items?.slice(0, 18);
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
          {[1, 2, 3].map((elem) => (
            <HomeItems key={elem} testItem={testItem} />
          ))}
        </div>
        <div className="home__pagination">pagination</div>
      </div>
    </div>
  );
};

export default Home;
