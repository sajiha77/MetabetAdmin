import styled from "styled-components";

export const TopNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 30px;
  }
  .circle {
    height: 35px;
    width: 35px;
    background-color: #c3cada;
    border-radius: 50%;
    display: inline-block;
  }
  .back {
    p {
      color: red;
    }
  }
  .right-nav {
    display: flex;
    gap: 5px;

    button,
    a {
      border: none;
      padding: 7px 20px;
      font-size: 18px;
      color: #ffff;
      cursor: pointer;
      max-width: 119px;
      background: #344bba;
      border-radius: 100px;
      text-decoration: none;
      font-family: "Inter", sans-serif;
    }
  }
`;
