import React from "react";
import { uploadAPI } from "../../api/API";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import {snookerData1} from "./SnookerData"
import {
  UfcContainer,
  Form,
  ContainerRight,
  Info,
  SoccerContainer,
  SoccerContainer1,
  PlayerTable,
} from "../Golf/Golf.styles";
function Snooker() {
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();
  const { fetchData } = useAxios();

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=football",
      url: `${uploadAPI}?q=snooker`,
      data: { ...bannerData, ...eventData },
    });
  };
  return (
    <UfcContainer>
      <SoccerContainer>
        <Info>
          <div className="event">
            <label>
              <p>Event Name</p>
              <input
                onChange={handleChange}
                type="text"
                name="eventName"
                placeholder="The Masters"
              />
            </label>
            <label>
              <p>Date</p>
              <input
                onChange={handleChange}
                type="text"
                name="date"
                placeholder=" 01 June 2023"
              />
            </label>
            <label>
              <p>Location</p>
              <input
                onChange={handleChange}
                type="text"
                name="location"
                placeholder=" Alexandra Palace London"
              />
            </label>
          </div>
        </Info>
        <ContainerRight>
          <div className="border">
            <p>Upload the banner</p>
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
          <button onClick={uploadEvent}>Update</button>
        </ContainerRight>
      </SoccerContainer>
      <SoccerContainer1>
        <PlayerTable>
          <div className="head">
            <span>Name</span>
            <div className="title">
              <span>Country</span>
              <span>
                WPBSA <br /> Rank
              </span>
            </div>
          </div>
          <Form>
            {snookerData1.map((item) => (
              <div className="status">
                {item.player}
                <label
                  style={{
                    background: item.backgroundColor && item.backgroundColor,
                  }}
                >
                  {item.title}
                  <input
                    id="input1"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder={item.name}
                  />
                  <input
                    id="input2"
                    onChange={handleChange}
                    type="text"
                    name="country"
                    placeholder={item.country}
                  />
                  <input
                    id="input2"
                    onChange={handleChange}
                    type="text"
                    name="rank"
                    placeholder={item.rank}
                  />
                </label>
                <div className="board">
                  <label htmlFor="upload">
                    Upload <br /> Image
                  </label>
                  <input
                    type="file"
                    id="upload"
                    name="image"
                    onChange={handleField}
                  />
                </div>
              </div>
            ))}
          </Form>
        </PlayerTable>
        <PlayerTable>
          <div className="head">
            <span>Name</span>
            <div className="title">
              <span>Country</span>
              <span>
                WPBSA <br /> Rank
              </span>
            </div>
          </div>
          <Form>
            {snookerData2.map((item) => (
              <div className="status">
                {item.player}
                <label
                  style={{
                    background: item.backgroundColor && item.backgroundColor,
                  }}
                >
                  {item.title}
                  <input
                    id="input1"
                    onChange={handleChange}
                    type="text"
                    name="name"
                  />
                  <input
                    id="input2"
                    onChange={handleChange}
                    type="text"
                    name="country"
                  />
                  <input
                    id="input2"
                    onChange={handleChange}
                    type="text"
                    name="rank"
                  />
                </label>
                <div className="board">
                  <label htmlFor="upload">
                    Upload <br /> Image
                  </label>
                  <input type="file" id="upload" />
                </div>
              </div>
            ))}
          </Form>
        </PlayerTable>
      </SoccerContainer1>
    </UfcContainer>
  );
}

export default Snooker;
