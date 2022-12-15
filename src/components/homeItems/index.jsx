import React from "react";
import Item from "./components/item";

const HomeItems = ({ testItem }) => {
  console.log(testItem, "testItem");
  return (
    <div className="home__items">
      {testItem?.map((elem) => (
        <Item key={elem.id} image={elem.image} name={elem.name} rating={elem.rating.average} />
      ))}
    </div>
  );
};

export default HomeItems;
