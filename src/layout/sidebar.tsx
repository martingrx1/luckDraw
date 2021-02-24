import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import { context } from "../store";
import { useHistory, useLocation } from "react-router-dom";
import routes from '../route/index'
const { SubMenu } = Menu;


import Route from "../route/types/index";

type MenuItem = {
  title: String,
  path:String,
  key: String
};



const Sidebar = () => {
  const { state, dispatch } = useContext(context);
  const history = useHistory();
  const location = useLocation();

const extractSiderbarData = (routes: Route[]): MenuItem[] => {
  return routes.map((r) => {
    return {
      title: r.title,
      path:r.path,
      key: r.title
    };
  });
};



  const createMenu = () => {
    let data = extractSiderbarData(routes[0].routes)
    return data.map((v) => {
      // if (v.children) return createSubMenu(v);
      // else return 
     return createMenuItem(v);
    });
  };

  // const createSubMenu = (data) => {
  //   return (
  //     <SubMenu title={data.title}>
  //       {data.children && createMenuItem(undefined, data.path, data.children)}
  //     </SubMenu>
  //   );
  // };

  const createMunuItemElement = (title, path) => {
    if (title === "404") return;
    return (
      <Menu.Item
        key={title}
        onClick={() => {
          console.log(path);
          
          history.push(path);
          dispatch({
            type: "changeNavTitle",
            payload: {
              title,
            },
          });
        }}
      >
        {title}
      </Menu.Item>
    );
  };

  const createMenuItem = (data, path = "", list = []) => {
    // if (list.length > 0) {
    //   return list.map((v) => {
    //     if (v.children) return createSubMenu(v);
    //     else return createMunuItemElement(v.title, path, v.path);
    //   });
    // } else {
    //   return createMunuItemElement(data.title, data.path, path);
    // }
    return createMunuItemElement(data.title, data.path);

  };


  return (
    <>
      {state.showSidebar && (
        <Menu style={{ width: 256, height: "100%" }} mode="inline">
          {createMenu()}
        </Menu>
      )}
    </>
  );
};

export default Sidebar;
