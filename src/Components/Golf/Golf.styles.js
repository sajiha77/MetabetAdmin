import styled from "styled-components";

export const UfcContainer = styled.div `
  display: flex;
  gap: 30px;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  max-width: 1330px;
  margin-top: 20px;
`;
export const Form = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 650px;

  .fields {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ebeff8;
    padding: 10px 20px;
    border-radius: 50px;

    span {
      font-size: 18px;
    }
  }
  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    border-radius: 50px;
    gap: 50px;

    #input1 {
      width: 130px;
    }
    #input2 {
      width: 50px;
    }
    input {
      border: none;
      background-color: transparent;
    }

    textarea:focus,
    input:focus {
      outline: none;
    }
    input::placeholder {
      font-size: 16px;
      font-weight: 600;
      color: black;

      /* margin-left: 10px; */
    }
  }
  #bg {
    background-color: #ebeff8;
  }
`;

export const ContainerRight = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
  width: 100%;
  max-width: 590px;

  .border {
    border-style: dashed;
    border-radius: 30px;
    color: #eaecf0;
    width: 100%;
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
      display: none;
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

export const Info = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .event {
    display: flex;
    gap: 20px;
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #354bba;
      border: none;
      color: white;
      font-size: 16px;
      min-width: 210px;
      height: 100%;
      max-height: 40px;
      width: 100%;
      width: 150px;
      border-radius: 50px;
      margin-left: 70px;
      cursor: pointer;
    }
    label {
      display: flex;
      gap: 45px;
      align-items: center;
      padding: 10px;
      justify-content: flex-start;
    }
    input {
      font-size: 16px;
      font-weight: 600;
      border-radius: 20px;
      text-align: center;
      border: none;
      color: black;
      background-color: #ebeff8;
      padding: 10px 0px;
      ::placeholder {
        color: black;
      }
    }

    textarea:focus,
    input:focus {
      outline: none;
    }
    p {
      display: flex;
      justify-content: flex-start;
      text-align: left;
    }

    #btn {
      display: none;
      visibility: none;
    }
  }
`;

export const SoccerContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
`;
export const SoccerContainer1 = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 50px;
`;
export const PlayerTable = styled.div `
  display: flex;
  flex-direction: column;

  .head {
    display: flex;
    gap: 105px;
    font-size: 18px;
    font-weight: 600;
    align-items: center;
    padding: 25px 0px 25px 120px;
  }
  .title {
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    /* font-size: 18px; */
  }
  .board {
    border-style: dashed;
    border-radius: 30px;
    color: #eaecf0;
    width: 100%;
    max-width: 90px;
    min-height: 35px;
    /* 
    padding: 5px 25px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    label {
      color: #989899;
      font-size: 12px;
      margin: 0px;
      text-align: center;
      padding: 5px 15px;
    }
    #upload {
       opacity: 0;
    width: 50%;
    z-index: 99;
    /* height: 0; */
    text-align: center;
    }
  }
`;