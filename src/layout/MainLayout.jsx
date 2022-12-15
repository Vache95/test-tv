import React from 'react';
import Rating from '@mui/material/Rating';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './mainlayout.scss';
import { useSelector } from 'react-redux';
import { selectFilms } from 'store/selector';
import MyLoader from 'components/Skeleton';

const MainLayout = () => {
  const { pathname } = useLocation();
  const { filmItems } = useSelector(selectFilms);
  const textInfoFilms = filmItems?.summary?.replace('<p>', ' ').replace('</p>', ' ');
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__container">
          <Link to="/">
            {' '}
            <h1 className="header__home-h1">TV Bland</h1>
          </Link>
          {pathname !== '/info' ? (
            <>
              <div className="header__home-texts">
                <p className="header__home-text1">TV Show and web series database.</p>
                <p className="header__home-text2">Create personalised schedules.</p>
                <p className="header__home-text3">
                  Episode guide,cast,crew and character information.
                </p>
              </div>
            </>
          ) : (
            <div className="header__content">
              <div className="header__left">
                <div className="header__left-img">
                  <img src={filmItems.image?.original} alt="film" />
                </div>
              </div>
              <div className="header__rigth">
                <Rating name="size-small" defaultValue={null} />
                <h3 className="header__rigth-h3">{filmItems?.name}</h3>
                <p className="header__rigth-text">{textInfoFilms}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default MainLayout;
