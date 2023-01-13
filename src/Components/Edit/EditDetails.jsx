import React, { useContext } from "react";
import styled from "styled-components";
import { ContainerRight, Form, Input, UfcContainer } from "../UFC/UFC.styles";
import { CricketData } from "../Cricket/CricketData";

import { uploadAPI } from "../../api/API";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";

const EditDetails = () => {
  // const { state, query } = useLocation();

  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      url: `${uploadAPI}?q=cricket`,
      data: { ...bannerData, ...eventData },
    });
  };

  // console.log("title", state);

  return (
    <EventDetailsCom>
      <h1>Edit Event</h1>
      <UfcContainer>
        <Form>
          {/* {state.map((item) => (
            <label
              style={{
                background: item.backgroundColor && item.backgroundColor,
                color: item.color && item.color,
              }}
            >
              {item.title}
              <Input
                getColor={item.color_1}
                onChange={handleChange}
                type="text"
                name={item.name}
                placeholder={item.placeholder}
              />
            </label>
          ))} */}
        </Form>
        <div className="right-pannel">
          <div className="pannel">
            <ContainerRight>
              <div className="border">
                <div>
                  <span>Event banner</span>
                  <span>(if applicable)</span>
                </div>
                <label htmlFor="icon">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon"
                  name="banner"
                  onChange={handleBanner}
                />
              </div>
              <div className="border">
                <span>Team 1 Flag</span>
                <label htmlFor="icon1">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon1"
                  name="t1NationalFlag"
                  onChange={handleBanner}
                />
              </div>
              <div className="border">
                <span>Upload Preview Video</span>
                <label htmlFor="icon2">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon2"
                  name="t2NationalFlag"
                  onChange={handleBanner}
                />
              </div>
              <div className="border">
                <span>Upload Footer Banner</span>
                <label htmlFor="icon2">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon2"
                  name="t2NationalFlag"
                  onChange={handleBanner}
                />
              </div>
            </ContainerRight>
            <ContainerRight>
              <div className="border">
                <span>Contest Banner *</span>
                <label htmlFor="icon">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon"
                  name="banner"
                  onChange={handleBanner}
                />
              </div>
              <div className="border">
                <span>Team 2 Flag</span>
                <label htmlFor="icon1">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon1"
                  name="t1NationalFlag"
                  onChange={handleBanner}
                />
              </div>
              <div className="border">
                <span>Upload Prediction Video</span>
                <label htmlFor="icon2">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon2"
                  name="t2NationalFlag"
                  onChange={handleBanner}
                />
              </div>
            </ContainerRight>
          </div>
          <button>Submit</button>
        </div>
      </UfcContainer>
    </EventDetailsCom>
  );
};

export default EditDetails;

const EventDetailsCom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0px;

  @media screen and (max-width: 1100px) {
    margin: 40px 10px;
  }
`;
