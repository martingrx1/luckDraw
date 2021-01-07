import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import axios from "axios";
import { context } from "../store";
import { useHistory, useLocation } from "react-router-dom";
import MenuItem from "antd/lib/menu/MenuItem";
import { JoinPath } from "../utils/path";
const { SubMenu } = Menu;

type SidebarItem = {
  key: String;
  title: String;
  children?: SidebarItem[];
};

const Sidebar = (): JSX.Element => {
  const { state, dispatch } = useContext(context);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log(state);
  });

  const createMenu = (data) => {
    return data.map((v) => {
      if (v.children) return createSubMenu(v);
      else return createMenuItem(v);
    });
  };

  const createSubMenu = (data) => {
    return (
      <SubMenu title={data.title}>
        {data.children && createMenuItem(undefined, data.path, data.children)}
      </SubMenu>
    );
  };

  const createMunuItemElement = (title, superPath, path) => {
    if (title === "404") return;
    return (
      <Menu.Item
        key={title}
        onClick={() => {
          history.push(JoinPath(superPath, path));
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
    if (list.length > 0) {
      return list.map((v) => {
        if (v.children) return createSubMenu(v);
        else return createMunuItemElement(v.title, path, v.path);
      });
    } else {
      return createMunuItemElement(data.title, data.path, path);
    }
  };

  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/getSiderBar").then((r) => {
  //     // console.log(r);
  //     if (r.status == 200) {
  //       setSidebarData([...r.data]);
  //     }
  //   });
  // }, []);

  return (
    <>
      {state.showSidebar && (
        <Menu style={{ width: 256, height: "100%" }} mode="inline">
          {state.sidebar && createMenu(state.sidebar)}
        </Menu>
      )}
    </>
  );
};

export default Sidebar;
