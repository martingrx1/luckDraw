import Header from "./header";
import Sidebar from "./sidebar";
import styled from "styled-components";
import { renderRoutes } from "react-router-config";

const FlexBox = styled.div`
  height: 100%;
  display: flex;
`;

const Main = styled.div`
  flex-grow: 1;
`;

const Padding = styled.div`
  padding-left: 40px;
`;

const Layout = (props) => {
  const route = props.route;
  return (
    <>
      <FlexBox>
        <Sidebar></Sidebar>
        <Main>
          <Header></Header>
          <Padding>{renderRoutes(route && route.routes)}</Padding>
        </Main>
      </FlexBox>
    </>
  );
};

export default Layout;
