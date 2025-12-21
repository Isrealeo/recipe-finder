import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import useThemeStore from "./store/themeStore";

const Root = () => {
  const darkMode = useThemeStore((state) => state.darkMode);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
