import { Suspense, lazy } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "layout/MainLayout";
import Home from "page/home/Home";

const Info = lazy(() => import(/* webpackChunkName: "Info" */ "../page/info/Info"));

const Router = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/info/:id" element={<Info />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
