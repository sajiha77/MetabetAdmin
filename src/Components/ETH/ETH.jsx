import React from "react";
import { UfcContainer, Form, ContainerRight, Input } from "../UFC/UFC.styles";
import { ETHData } from "./ETHData";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import { uploadAPI } from "../../api/API";
import { useLocation } from "react-router-dom";
import { INPUT } from "../Bitcoin/Bitcoin";
function ETH({ edit }) {
  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();
  const { state } = useLocation();
  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=eth",
      url: `${uploadAPI}?q=eth`,
      data: { ...bannerData, ...eventData },
    });
  };
  const updateEvent = async () => {
    // console.log({ data: eventData });
    await fetchData({
      method: "PUT",
      url: `${API}/editEvent/${state._id}?q=eth`,
      data: { ...bannerData, ...eventData },
    });
  };
  return (
    <>
      {edit && (
        <h1
          style={{
            margin: "40px",
            textAlign: "center",
          }}
        >
          Edit Event
        </h1>
      )}
      <UfcContainer>
        <Form>
          {ETHData.map((item) => (
            <label
              style={{
                background: item.backgroundColor && item.backgroundColor,
                color: item.color && item.color,
              }}
            >
              {item.title}
              <INPUT
                getColor={item.color_1}
                // onChange={handleChange}
                type="text"
                value={edit ? state[item.name] : null}
                name={item.name}
                placeholder={item.placeholder}
                handleChange={handleChange}
              />
            </label>
          ))}
        </Form>
        <div className="right-pannel">
          <div className="pannel">
            <ContainerRight>
              <div className="border">
                <span>Upload Preview Video</span>
                <div className="label">
                  <input
                    type="text"
                    name="previewVideo"
                    value={state?.previewVideo}
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
                <span>Upload Prediction Video</span>
                <div className="label">
                  <input
                    type="text"
                    value={state?.previewVideo}
                    name="predictionVideo"
                    onChange={handleChange}
                    placeholder="Paste the Url"
                  />
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </div>
              </div>
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
            </ContainerRight>
          </div>
          {edit ? (
            <button onClick={updateEvent}>Update</button>
          ) : (
            <button onClick={uploadEvent}>Submit</button>
          )}
        </div>
      </UfcContainer>
    </>
  );
}

export default ETH;
