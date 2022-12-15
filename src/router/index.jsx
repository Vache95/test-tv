import { Route, Routes } from 'react-router-dom';

import MainLayout from 'layout/MainLayout';
import Home from 'page/home/Home';
import Info from 'page/info/Info';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
