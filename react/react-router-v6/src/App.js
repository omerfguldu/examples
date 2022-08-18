import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Book";
import BookList from "./pages/BookList";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import User from "./pages/User";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users">
          <Route index element={<Users userData={setCurrentUser} />} />
          <Route path=":id" element={<User userData={currentUser} />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;
