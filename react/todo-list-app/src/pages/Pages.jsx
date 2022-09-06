import Todos from "../components/Todos";

import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path={"/alltodos"} element={<Todos />} />
      <Route path={"/completed"} element={<Todos />} />
      <Route path={"/inprogress"} element={<Todos />} />
    </Routes>
  );
}

export default Pages;
