import React from "react";
import { uploadAPI } from "../../api/API";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import { UfcContainer, Form, ContainerRight } from "../UFC/UFC.styles";
import { SoccerData } from "./SoccerData";
function Soccer() {
  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=football",
      url: `${uploadAPI}?q=soccer`,
      data: { ...bannerData, ...eventData },
    });
  };

  return (
    <>
      <UfcContainer>
        <Form>
          <label id="bg">
            <span>Time</span>
            <input
              type="text"
              name="time"
              placeholder="4:06:21 PM"
              onChange={handleChange}
            ></input>
            {/* <Time /> */}
          </label>
          {SoccerData.map((item) => (
            <label
              style={{
                background: item.backgroundColor && item.backgroundColor,
              }}
            >
              {item.title}
              <input
                onChange={handleChange}
                type="text"
                name={item.name}
                placeholder={item.placeholder}
              />
            </label>
          ))}
        </Form>
        <ContainerRight>
          <div className="border">
            <p>Upload the banner</p>
            <label htmlFor="icon">
              <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
            </label>
            <input
              type="file"
              name="banner"
              onChange={handleBanner}
              id="icon"
            />
          </div>
          <button>Update</button>
          <div className="border">
            <p>Upload home Team logo</p>
            <label htmlFor="icon1">
              <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
            </label>
            <input
              type="file"
              name="hLogo"
              id="icon1"
              onChange={handleBanner}
            />
          </div>
          <button>Update</button>
          <div className="border">
            <p>Upload AWAY Team logo </p>
            <label htmlFor="icon2">
              <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
            </label>
            <input
              type="file"
              name="aLogo"
              id="icon2"
              onChange={handleBanner}
            />
          </div>
          <button onClick={uploadEvent}>Update</button>
        </ContainerRight>
      </UfcContainer>
    </>
  );
}

export default Soccer;
