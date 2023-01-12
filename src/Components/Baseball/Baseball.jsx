import React from "react";
import { uploadAPI } from "../../api/API";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import {
  UfcContainer,
  Form,
  ContainerRight,
  Info,
  SoccerContainer,
  SoccerContainer1,
  PlayerTable,
} from "../Football/Football.styles";
import { bdata, bdata2 } from "./BaseballData";
function Baseball() {
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();
  const { fetchData } = useAxios();

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=football",
      url: `${uploadAPI}?q=baseball`,
      data: { ...bannerData, ...eventData },
    });
  };
  return (
    <UfcContainer>
      <SoccerContainer>
        <Info>
          <div className="event">
            <label>
              <p>Date</p>
              <input
                onChange={handleChange}
                type="text"
                name="date"
                placeholder="28 October 2022"
              />
            </label>
            <label>
              <p>Venue</p>
              <input
                onChange={handleChange}
                type="text"
                name="venue"
                placeholder=" Alliance Arena"
              />
            </label>
            <label>
              <p>Start Time</p>
              <input
                onChange={handleChange}
                type="text"
                name="startTime"
                placeholder=" 20:00 Eastern"
              />
            </label>
          </div>
        </Info>
      </SoccerContainer>
      <SoccerContainer1>
        <PlayerTable>
          <Form>
            {bdata.map((item) => (
              <div className="status">
                {item.player}
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
              </div>
            ))}
          </Form>
        </PlayerTable>
        <PlayerTable>
          <Form>
            {bdata2.map((item) => (
              <div className="status">
                {item.player}
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
              </div>
            ))}
          </Form>
        </PlayerTable>
      </SoccerContainer1>
      <ContainerRight>
        <div className="banner">
          <div className="border">
            <p>Upload HOME Team Logo</p>
            <label htmlFor="icon">
              <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
            </label>
            <input
              type="file"
              id="icon"
              name="hTeamLogo"
              onChange={handleBanner}
            />
          </div>
          <button>Update</button>
        </div>
        <div className="banner">
          <div className="border">
            <p>Upload the banner</p>
            <label htmlFor="icon1">
              <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
            </label>
            <input
              type="file"
              id="icon1"
              name="banner"
              onChange={handleBanner}
            />
          </div>
          <button>Update</button>
        </div>
        <div className="banner">
          <div className="border">
            <p>Upload AWAY Team Logo</p>
            <label htmlFor="icon2">
              <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
            </label>
            <input
              type="file"
              id="icon2"
              name="aTeamLogo"
              onChange={handleBanner}
            />
          </div>
          <button onClick={uploadEvent}>Update</button>
        </div>
      </ContainerRight>
    </UfcContainer>
  );
}

export default Baseball;
