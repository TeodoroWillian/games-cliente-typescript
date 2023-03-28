import Home from "../src/pages/Home/index";
import { Routes, Route } from "react-router";
import { RoutePath } from "../src/types/routes";
import Login from "./pages/Login/index";
import ManageGames from "./components/ManageGames";
import ManageUsers from "./components/ManageUsers";
import Settings from "../src/pages/Settings";
import ManageGenres from "./components/ManageGenres";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.SETTINGS} element={<Settings />}>
        <Route path={RoutePath.SETTINGS_GENRES} element={<ManageGenres />} />
        <Route path={RoutePath.SETTINGS_GAMES} element={<ManageGames />} />
        <Route path={RoutePath.SETTINGS_USERS} element={<ManageUsers />} />
      </Route>
    </Routes>
  );
};

export default Router;
