import React from "react";
import { UfcContainer, Form, ContainerRight, Input } from "../UFC/UFC.styles";
import { UFCData } from "./UFCData";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import { uploadAPI } from "../../api/API";
import { useEffect } from "react";
import { INPUT } from "../Bitcoin/Bitcoin";
import { useLocation } from "react-router-dom";
function UFC({ edit }) {
  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state, "state");
  }, [state]);
  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=ufc",
      url: `${uploadAPI}?q=ufc`,
      data: { ...bannerData, ...eventData },
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
    console.log({
      ...bannerData,
      ...eventData,
    });
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
          {UFCData.map((item) => (
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
                value={edit ? state.eventName : null}
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
                <span>Competitor One *</span>
                <label htmlFor="icon1">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon1"
                  name="c1Image"
                  onChange={handleBanner}
                />
              </div>
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
                <span>Competitor Two *</span>
                <label htmlFor="icon4">
                  <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
                </label>
                <input
                  type="file"
                  id="icon4"
                  name="c2Image"
                  onChange={handleBanner}
                />
              </div>
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

export default UFC;
