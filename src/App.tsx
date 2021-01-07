import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { context, initState, reducer } from "./store";
import { renderRoutes } from "react-router-config";
import { BrowserRouter, useHistory, Route } from "react-router-dom";
// import routes from "./route";
import Layout from "./layout";

function App() {
  const [routes, sRoutes] = useState([]);
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    axios.get("http://localhost:8000/api/getRouter").then((router) => {
      if (router.status == 200) {
        addRoute(router.data[0].children).then((formattedRouter) => {
          // console.log(formattedRouter);
          dispatch({
            type: "setSidebar",
            payload: {
              sidebar: formattedRouter,
            },
          });
          let route = [];
          route.push({
            path: "/",
            component: Layout,
            routes: formattedRouter,
          });
          // console.log(route);
          sRoutes(route.slice());
        });
      }
    });
  }, []);

  const addRoute = (router, join = "", errorRouter = {}) => {
    return new Promise((reslove, reject) => {
      let routes = [];
      let count = 0;

      router.map((r) => {
        let curRouter = {
          path: join + r.path,
          title: r.title,
          component: null,
        };

        if (r.children) {
          addRoute(r.children, r.path, errorRouter).then((t) => {
            routes.push(...(t as []));
            if (++count === router.length) {
              routes.push(errorRouter);
              reslove(routes);
            }
          });
        } else {
          if (r.path === "*" && r.title === "404") {
            import("./pages/404").then((c) => {
              errorRouter = {
                path: "*",
                title: r.title,
                component: c.default,
              };
              if (++count === router.length) {
                routes.push(errorRouter);
                reslove(routes);
              }
            });
          } else {
            import("./pages" + join + r.path).then((c) => {
              curRouter.component = c.default;
              routes.push(curRouter);
              if (++count === router.length) reslove(routes);
            });
          }
        }
      });
    });
  };

  return (
    <context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </context.Provider>
  );
}

export default App;
