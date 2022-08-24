import Button from "./Button";
import Header from "./Header";
import { useTheme } from "../context/ThemeContext";
import Profile from "./Profile";

function Container() {
  const { theme } = useTheme();

  return (
    <div className={`container ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <Header />
      <hr />
      <Button />

      <hr />
      <Profile />
    </div>
  );
}

export default Container;
