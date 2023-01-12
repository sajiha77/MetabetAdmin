import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { LoginAPI } from "../api/API";

function SignIn() {
  const token = localStorage.getItem("token");
  // const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [visible, setVisible] = useState(false);

  const loginIntialValues = {
    email: "",
    password: "",
  };

  const [loginInfo, setLoginInfo] = useState(loginIntialValues);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(LoginAPI, {
        ...loginInfo,
      });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);

        setEmailError("");
        setPasswordError("");
        window.location.reload();
      } else if (res.status === 204) {
        setEmailError("This email dont exist");
        setPasswordError("");
      } else if (res.status === 205) {
        setPasswordError("Incorrect password");
        setEmailError("");
      }
    } catch (error) {
      console.log("The error message is", error.message);
    }
  };

  const renderForm = (
    <>
      <FrontPage>
        <LogInForm>
          <RoundedLogo>
            <Img
              src="data:image/png;base64,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"
              alt="metbet"
            />
            <h1>MetaBetMask</h1>
          </RoundedLogo>
          <FormContent>
            <InputContainer>
              <FormLabel>Email </FormLabel>
              <FormInput
                type="text"
                placeholder="Enter Email"
                name="email"
                value={loginInfo.email}
                onChange={handleChange}
                required
              />
              <Error> {emailError ? emailError : ""}</Error>
            </InputContainer>
            <InputContainer>
              <FormLabel>Password </FormLabel>
              <PasswordField>
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  value={loginInfo.password}
                  onChange={handleChange}
                  required
                />
                {/* <BiShow onClick={togglePassword} /> */}
              </PasswordField>
              <Error> {passwordError ? passwordError : ""}</Error>
            </InputContainer>
            <FormButton type="submit" onClick={submitHandler}>
              LogIn
            </FormButton>
          </FormContent>
        </LogInForm>
      </FrontPage>
    </>
  );

  return <div>{renderForm}</div>;
}

export const Error = styled.p`
  font-size: 12px;
  color: red;
`;
export const FrontPage = styled.div`
  display: flex;
  grid-gap: 50px;
  justify-content: center;
  padding: 20px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const CompanyName = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 800px) {
    Img {
      display: none;
    }
  }
`;
export const Img = styled.img`
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  height: auto;
`;

export const LogInForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 30px;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
    background: #fff;
    padding: 80px 60px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  min-width: 700px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoundedLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 786px) {
    width: 200px;
    display: ${({ visible }) => (visible ? "none" : "initial")};
    margin: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  padding: 30px 0;

  @media screen and (max-width: 400px) {
    padding: 32px;
  }
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #434955;
`;

export const FormInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #434955;
  outline: none;
  color: #434955;
  border-radius: 4px;
  text-align: start;
  ::placeholder {
    color: #434955;
  }
`;

export const FormButton = styled.button`
  background: #434955;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00bf80;
  }
`;
export const PasswordField = styled.div`
  display: flex;
  padding: 10px 20px;
  border: 1px solid #434955;
  outline: none;
  color: #434955;
  border-radius: 4px;

  input {
    text-align: start;
    border: none;
    outline: none;
    width: 100%;
    color: #434955;
    ::placeholder {
      color: #434955;
    }
  }
`;
export default SignIn;
