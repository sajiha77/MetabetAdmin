import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 100%;

  .wrapper-link {
    display: flex;
    /* gap: 35px; */
    justify-content: space-around;
    padding: 20px;
  }

  .wrapper-link-1 {
    display: flex;
    gap: 30px;
    padding: 20px 20px;
    flex-direction: column;
    a {
      text-decoration: none;
      /* color: #9eadb9; */
    }

    .bottom-hr {
      margin-left: 0;
    }
  }
  .wrapper-link-2 {
    display: flex;
    gap: 30px;
    padding: 20px 20px;
    flex-direction: column;
    a {
      text-decoration: none;

      /* color: #9eadb9; */
    }
  }

  .sidebar__item .sidebar__item-inner {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .active {
    color: #344bba;
    position: relative;
  }

  .active::after {
    content: "";
    position: absolute;
    border-bottom: 2px solid #344bba;
    width: 100%;
    height: 15px;
  }

  .wrapper-span {
    color: #fff;
    padding: 20px;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: #1f1f20;
    font-size: 16px;
    /* color: #fff; */
  }
`;
