import React from "react";
import { useEffect } from "react";
import { uploadAPI } from "../../api/API";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import { UfcContainer, Form, ContainerRight, Input } from "../UFC/UFC.styles";
import { PoliticsData } from "./PoliticsData";
function Politics() {
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();
  const { fetchData } = useAxios();

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=football",
      url: `${uploadAPI}?q=politics`,
      data: { ...bannerData, ...eventData },
    });
  };
  useEffect(() => {
    console.log(
      {
        1: bannerData,
        2: eventData,
      },
      "OPt"
    );
  }, [bannerData, eventData]);
  return (
    <UfcContainer>
      <Form>
        {PoliticsData.map((item) => (
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
              <span>STARING *</span>
              <label htmlFor="icon2">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon2"
                name="starring"
                onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>Upload Preview Video</span>
              <div className="label">
                <input
                  type="text"
                  name="previewVideo"
                  onChange={handleBanner}
                  placeholder="Paste the Url"
                />
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </div>
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
              <span>Upload Prediction Video</span>
              <div className="label">
                <input
                  type="text"
                  name="predictionVideo"
                  onChange={handleBanner}
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

export default Politics;
