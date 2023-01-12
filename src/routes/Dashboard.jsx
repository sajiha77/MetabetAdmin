import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Nav from "../Components/Nav/Nav";
import TopNav from "../Components/TopNav/TopNav";
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
const Dashboard = () => {
  return (
    <div>
      <ContainerWrapper>
        <div className="container">
          <header>
            <TopNav />
          </header>
          <div className="wrapper-main">
            <div className="left-sidebar">
              <Nav />
            </div>
            <div className="main">
              <div id="detail">
                <Outlet />
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default Dashboard;
