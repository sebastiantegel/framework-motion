import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import "./../styles/main.scss";

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
