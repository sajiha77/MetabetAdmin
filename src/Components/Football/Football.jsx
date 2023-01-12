import React from "react";
import { UfcContainer, Form, ContainerRight, Input } from "../UFC/UFC.styles";

import { FootballData } from "./FootballData";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import { uploadAPI } from "../../api/API";

import Upload_Link_icon from "../../assets/images/upload_link.png";
import { useEffect } from "react";
import { useState } from "react";

function Football() {
  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();
  const [checked, setChecked] = useState(false);

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=football",
      url: `${uploadAPI}?q=football`,
      data: { ...bannerData, ...eventData },
    });
  };

  const checkBoxData = [
    "Premier League",
    "La Liga",
    "Ligue 1",
    "Serie A",
    "Champions",
  ];
  // const handleInbox =(e)=>{
  //   handleChange(e)

  // }

  useEffect(() => {
    console.log({
      ...bannerData,
      ...eventData,
    });
  }, [bannerData, eventData]);
  return (
    <UfcContainer>
      <Form>
        {FootballData.map((item) => (
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
        ))}
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
                name="eventBanner"
                onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>HOME TEAM LOGO</span>
              <label htmlFor="icon1">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon1"
                name="hLogo"
                onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>Upload Preview Video</span>
              <div className="label">
                <input
                  type="text"
                  name="previewVideo"
                  onChange={handleChange}
                  placeholder="Paste the Url"
                />
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </div>
            </div>
            <div className="border">
              <span>Upload Footer Banner</span>
              <label htmlFor="icon2">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon2"
                name="footerBanner"
                onChange={handleBanner}
              />
            </div>
          </ContainerRight>
          <ContainerRight>
            <div className="border">
              <span>Contest Banner *</span>
              <label htmlFor="icon3">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon3"
                name="contestBanner"
                onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>AWAY TEAM LOGO</span>
              <label htmlFor="icon4">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon4"
                name="aLogo"
                onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>Upload Prediction Video</span>
              <div className="label">
                <input
                  type="text"
                  name="predictionVideo"
                  onChange={handleChange}
                  placeholder="Paste the Url"
                />
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </div>
            </div>
            <div className="border">
              <div className="checkbox-wrapper">
                <div className="checkbox-item_1">
                  <span>Premier League</span>
                  <span>La Liga</span>
                  <span>Ligue 1</span>
                  <span>Serie A</span>
                  <span>Champions</span>
                </div>
                <div className="checkbox-item_2">
                  {checkBoxData.map((data, index) => (
                    <input
                      type="checkbox"
                      disabled={checked}
                      key={index}
                      value={data}
                      name="league"
                      onChange={(e) => {
                        handleChange(e), setChecked(!checked);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ContainerRight>
        </div>
        <button onClick={uploadEvent}>Submit</button>
      </div>
    </UfcContainer>
  );
}

export default Football;
