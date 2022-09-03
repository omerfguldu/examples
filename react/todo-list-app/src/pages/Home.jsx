import React from "react";
import Todos from "../components/Todos";
import Menu from "../components/Menu";
import Detail from "../components/Detail";

import { useTodo } from "../context/TodoContext";

function Home({ children }) {
  const { username } = useTodo();

  return (
    <div className="home-container">
      <Menu />
      {children}
      <Detail />
    </div>
  );
}

export default Home;
