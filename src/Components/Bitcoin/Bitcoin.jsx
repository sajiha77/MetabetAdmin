import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API, uploadAPI } from "../../api/API";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import { UfcContainer, Form, ContainerRight, Input } from "../UFC/UFC.styles";
import { BitcoinData } from "./BitcoinData";

function Bitcoin({ edit }) {
  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();
  const { state } = useLocation();
  // console.log({ state });
  // const arrData = Object.keys(state)
  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=bitcoin",
      url: `${uploadAPI}?q=bitcoin`,
      data: { ...bannerData, ...eventData },
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    });
  };

  const updateEvent = async () => {
    // console.log({ data: eventData });
    await fetchData({
      method: "PUT",
      url: `${API}/editEvent/${state._id}?q=bitcoin`,
      data: { ...bannerData, ...eventData },
    });
  };

  useEffect(() => {
    console.log(
      {
        data: { ...bannerData, ...eventData },
      },
      "data"
    );
  }, [eventData, bannerData]);

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
          {BitcoinData.map((item) => (
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
                <label htmlFor="icon">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon"
                  // value={state?.footerBanner}
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
                    name="predictionVideo"
                    value={state?.predictionVideo}
                    onChange={handleChange}
                    placeholder="Paste the Url"
                  />
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </div>
              </div>
              <div className="border">
                <span>Contest Banner *</span>
                <label htmlFor="icon3">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon3"
                  // value={state.contestBanner}
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

export default Bitcoin;

export const INPUT = ({ value, handleChange, ...props }) => {
  const [state, setState] = useState(value);
  // const {handleChange} = useBanner();

  const handleValue = (e) => {
    setState(e.target.value);
    handleChange(e);
  };

  return <Input value={state} onChange={handleValue} {...props} />;
};
