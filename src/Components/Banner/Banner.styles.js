import styled from "styled-components";

export const UfcContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1330px;
  margin-top: 20px;
`;

export const ContainerRight = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 37px;
  width: 100%;
  max-width: 590px;

  .border {
    border-style: dashed;
    border-radius: 30px;
    color: #eaecf0;
    width: 100%;
    /* padding: 0px 40px; */
    min-height: 265px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    p {
      color: #1f1f20;
      font-size: 35px;
      margin: 0px;
      text-align: center;
    }
    h1 {
      margin: 0px;
    }
    i {
      font-style: none;
      font-size: 50px;
      border: none;
      background-color: black;
      border-radius: 31px;
      margin: 0px;
      font-size: 60px;
      cursor: pointer;
    }
  #icon , #icon1, #icon2, #icon3, #icon4  {
      /* display: none; */
      visibility: none;
    }
  }
  button {
    background-color: #354bba;
    border: none;
    color: white;
    font-size: 16px;
    padding: 15px 0px;
    width: 150px;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export const Checkbutton = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
  }
  .box {
    display: flex;
    gap: 69px;
  }
  .form-check {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .list {
    display: flex;
  }
`;