import { React } from "react";
/**
 * @file 路由类型声明
 * @author linbingchen@baidu.com
 */

type Route = {
  path: String;
  title: String;
  component: React.Component;
};
export default Route;
