import { Router } from "framework7/types";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import PanelTest from "./pages/PanelTest.tsx";

const routes: Router.RouteParameters[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about/",
    component: About,
  },
  {
    path: "/panel/",
    component: PanelTest,
  },
  {
    path: "(.*)",
    component: NotFound,
  },
];

export default routes;
