import Draw from "../pages/draw";
import Prize from "../pages/config/prize";
import Paper from "../pages/paper";
import Flower from "../pages/config/flower";
import Layout from "../layout/index";

const routes = [
  {
    path: "/",
    component: Layout,
    routes: [
      { path: "/paper", component: Paper },
      { path: "/draw", component: Draw },
      {
        path: "/config/prize",
        component: Prize,
      },
      {
        path: "/config/flower",
        component: Flower,
      },
    ],
  },
];

export default routes;
