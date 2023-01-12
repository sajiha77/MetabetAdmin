import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../Nav/Nav";
// import TopNav from "../TopNav";
import styled from "styled-components";
import TopNav from "../TopNav/TopNav";
import PageRoutes from "../PageRoutes";
import SignIn from "../../pages/SignIn";

const ContainerWrapper = styled("div")`
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f7f8fa;
    border-radius: 25px;
    height: 100%;
  }

  .wrapper-main {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  header {
    grid-column-start: 1;
    grid-column-end: 4;
    z-index: 9;
  }

  .left-sidebar {
    grid-row-start: 2;
    grid-row-end: 3;
    background-color: #ebeff8;
  }

  .main {
    width: 100%;
    height: 100%;
    /* min-height: 1180px; */
  }

  footer {
    grid-column: 1 / span 3;
  }
`;

const Layout = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <BrowserRouter>
      <Routes>
        {!token ? (
          <Route path="/" exact element={<SignIn />} />
        ) : (
          <Route
            render={(props) => (
              <ContainerWrapper>
                <div className="container">
                  <header>
                    <TopNav />
                  </header>
                  <div className="wrapper-main">
                    <div className="left-sidebar">
                      <Nav {...props} />
                    </div>
                    <div className="main">{/* <PageRoutes /> */}</div>
                  </div>
                </div>
              </ContainerWrapper>
            )}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
