import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./page/home/Home";
import Info from "page/Info";

function App() {
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
}

export default App;
