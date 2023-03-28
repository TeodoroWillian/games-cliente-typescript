import { NavItem } from "../components/Menu/types";
import { Home } from "../assets/icons/home";
import { Settings } from "../assets/icons/settings";
import { RoutePath } from "../types/routes";

export const navigationItems: NavItem[] = [
  {
    icon: <Home />,
    path: RoutePath.HOME,
  },
  {
    icon: <Settings />,
    path: RoutePath.SETTINGS,
  },
];
