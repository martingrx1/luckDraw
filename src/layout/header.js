import React, { useState, useContext } from "react";
import { PageHeader } from "antd";
import { context } from "../store";

const Header = () => {
  const { state, dispatch } = useContext(context);

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => {
          dispatch({ type: "changeSidebarStatus" });
        }}
        title={state.navTitle}
        subTitle="This is a subtitle"
      />
    </>
  );
};

export default Header;
