import Draw from "../pages/draw";
import Prize from "../pages/config/prize";
import Paper from "../pages/paper";
import UploadPaper from "../pages/uploadPaper";
import Flower from "../pages/config/flower";
import Layout from "../layout/index";

const routes = [
  {
    path: "/",
    component: Layout,
    routes: [
      { path: "/paper", title: "试卷", component: Paper },
      { path: "/uploadPaper", title: "试卷上传", component: UploadPaper },
      { path: "/draw", title: "抽奖", component: Draw },
      {
        path: "/config/prize",
        title: "拼图",
        component: Prize,
      },
      {
        path: "/config/flower",
        title: "fafa",
        component: Flower,
      },
    ],
  },
];

export default routes;
