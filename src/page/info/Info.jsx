import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectFilms } from 'store/selector';
import { tvBlandInfoThunk, tvBlandThunk } from 'store/slice/tvSlice';
import Show from './components/Show';
import Starring from './components/Starring';
import './info.scss';

const Info = () => {
  const { filmItems } = useSelector(selectFilms);
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    dispatch(tvBlandInfoThunk(state.id));
    dispatch(tvBlandThunk());
  }, []);

  return (
    <div className="info">
      <div className="info__container">
        <Show filmItems={filmItems} />
        <Starring starringName={state.starringName} />
      </div>
    </div>
  );
};

export default Info;
