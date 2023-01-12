import React from "react";
import { uploadAPI } from "../../api/API";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import { UfcContainer, Form, ContainerRight, Input } from "../UFC/UFC.styles";
import { CricketData } from "./CricketData";

function Cricket() {
  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      url: `${uploadAPI}?q=cricket`,
      data: { ...bannerData, ...eventData },
    });
  };

  return (
    <UfcContainer>
      <Form>
        {CricketData.map((item) => (
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
                <span>Event Banner</span>
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
              <span>Team 1 Flag</span>
              <label htmlFor="icon1">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon1"
                name="t1Flag"
                onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>Upload Preview Video</span>
              <div className="label">
                <input
                  type="text"
                  onChange={handleBanner}
                  placeholder="Paste the Url"
                  name="previewVideo"
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
              <label htmlFor="icon">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon"
                name="contestBanner"
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
                name="t2Flag"
                onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>Upload Prediction Video</span>
              <div className="label">
                <input
                  type="text"
                  onChange={handleBanner}
                  name="predictionVideo"
                  placeholder="Paste the Url"
                />
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </div>
            </div>
          </ContainerRight>
        </div>
        <button onClick={uploadEvent}>Submit</button>
      </div>
    </UfcContainer>
  );
}

export default Cricket;
