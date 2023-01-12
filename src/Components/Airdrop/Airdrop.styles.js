import styled from "styled-components";

export const AirContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1330px;
  margin: 30px auto;
`;
export const Socials = styled.div`
  display: flex;
  gap: 20px;
  button {
    background: #ebeff7;
    border-radius: 100px;
    cursor: pointer;
    border: none;
    padding: 5px 40px;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  /* max-width: 540px; */
  button {
    background: #344bba;
    border-radius: 100px;
    border: none;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
    padding: 15px 40px;
  }
  .label-btn {
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 10px;
  }

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
    max-width: 750px;
    min-height: 30px;
    /* background: #004267; */
    border-radius: 100px;
    color: #9b9b9b;
    font-size: 18px;
    div {
      display: flex;
      gap: 10px;
      align-items: baseline;
    }
  }
  #bg {
    background-color: #ebeff8;
  }
`;
export const Input = styled("input")`
  border: none;
  background-color: transparent;
  text-align: right;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => props.getColor};
    text-align: right;
    width: 100%;

    /* margin-left: 10px; */
  }
`;
export const Input1 = styled("input")`
  border: none;
  background-color: transparent;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => props.getColor};
    text-align: left; /* margin-left: 10px; */
  }
`;
