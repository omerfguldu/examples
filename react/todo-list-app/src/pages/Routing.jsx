import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import AddTodoCard from "../components/AddTodoCard";
import Pages from "./Pages";
import { Route, Routes, Navigate } from "react-router-dom";
import { useTodo } from "../context/TodoContext";
import { AnimatePresence, motion } from "framer-motion";

function Routing() {
  const { username } = useTodo();

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit layout>
        <div className="main-container">
          <AddTodoCard />
          <Routes>
            <Route
              exact
              path="/"
              element={
                username ? (
                  <Navigate to="/alltodos" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path={"login"} element={<Login />} />
          </Routes>
          <Home>
            <Pages />
          </Home>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Routing;
