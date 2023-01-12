import styled from "styled-components";
import Upload_Link_icon from "../../assets/images/upload_link.png";

export const UfcContainer = styled.div `
  display: flex;
  gap: 20px;
  /* align-items: center; */
  justify-content: space-around;
  width: 100%;
  max-width: 1330px;
  margin: 20px auto;
  /* margin: 0 auto; */

  /* .section-1 {
    display: flex;
    width: 100%;
    max-width: 700px;
    justify-content: center;
  }

  .section-2 {
    display: flex;
    width: 100%;
    max-width: 700px;
    justify-content: center;
  } */

  .right-pannel {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 60px;
    .pannel {
      display: flex;
      gap: 60px;
    }
    button {
      width: 100%;
      max-width: 671px;
      border: none;
      cursor: pointer;
      min-height: 50px;
      padding: 10px;
      background: #344bba;
      border-radius: 100px;
      font-size: 18px;
      color: #ffffff;
    }
  }
`;
export const Form = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 540px;

  .fields {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ebeff8;
    /* width: 185%; */
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
    padding: 10px 30px;
    gap: 10px;
    width: 100%;
    max-width: 450px;
    min-height: 25px;
    /* background: #004267; */
    border-radius: 100px;
    color: #9b9b9b;
    font-size: 18px;
  }
  #bg {
    background-color: #ebeff8;
  }
`;

export const Input = styled("input")
`
  border: none;
  background-color: transparent;
  text-align: right;
  height: 100%;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => props.getColor};
    text-align: right;

    /* margin-left: 10px; */
  }
`;

export const ContainerRight = styled.div `
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 37px;
  width: 100%;
  max-width: 590px;

  .border {
    border: 1px dashed #9ea4b0;
    border-radius: 35px;
    color: #eaecf0;
    width: 100%;
    padding: 0 20px;
    min-height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    .label {
      display: flex;
      flex-direction: row;
      background: rgb(0, 101, 157);
      border-radius: 40px;
      padding: 5px 10px;
      width: 100%;

      img {
        max-width: 30px;
      }
    }

    .checkbox-wrapper {
      display: flex;
      flex-direction: row;
      gap: 50px;

      .checkbox-item_1 {
        display: flex;
        justify-content: center;
        gap: 20px;

        span {
          text-align: left;
          font-weight: 700;
          font-size: 18px;
        }
      }

      .checkbox-item_2 {
        display: flex;
        justify-content: center;

        input {
          height: 28px;
          width: 25px;
        }
      }
    }

    .upload-wrapper {
      display: flex;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    span {
      color: #1f1f20;
      font-size: 24px;
      margin: 0px;
      text-align: center;
    }
    span:nth-child(2) {
      font-size: 18px;
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
    #icon,
    #icon1,
    #icon2,
    #icon3, #icon4 {
      display: none;
      visibility: none;
    }

    input {
      width: 100%;
      /* max-width: 290px; */
      text-align: left;
      position: relative;

      &::placeholder {
        font-weight: 600;
        font-family: "Inter", sans-serif;
        color: #eaecf0;
      }
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