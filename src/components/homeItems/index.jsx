import MyLoader from 'components/Skeleton';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilms } from 'store/selector';
import Item from './components/item';

const HomeItems = ({ filmItem }) => {
  const { loading } = useSelector(selectFilms);

  const films = filmItem?.map((elem) => (
    <Item
      key={elem.id}
      image={elem.show}
      name={elem.show.name}
      rating={elem.show.rating.average}
      id={elem.show.id}
      starringName = {elem.name}
    />
  ));

  const skeletons = [...new Array(18)].map((_, i) => <MyLoader key={i} />);

  return <div className="home__items">{loading ? skeletons : films}</div>;
};

export default HomeItems;
