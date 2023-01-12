import React, { useState } from "react";
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
} from "../Golf/Golf.styles";
import { hracedata1, hracedata2 } from "./HorseRaceData";
import { useArray } from "../../hooks/useArray";
import { uploadAPI } from "../../api/API";

function HorseRace() {
  const [players, setPlayers] = useState([]);
  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();

  const handleFields = async (e) => {
    console.log(e.target.type);
    setPlayers({
      ...players,
      [e.target.attributes["data-index"].value]: {
        ...players[e.target.attributes["data-index"].value],
        [e.target.name]:
          e.target.type === "file"
            ? await useArray(e.target.files[0]).then((val) => val)
            : e.target.value,
      },
    });
  };

  const uploadEvent = async () => {
    const playersData = Object.values(players).map((obj, index) => {
      return { ...obj, playerCount: `player${index + 1}` };
    });
    await fetchData({
      method: "POST",
      url: `${uploadAPI}/uploadEvent?q=horserace`,
      data: {
        players: playersData,
        ...bannerData,
        ...eventData,
      },
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
                placeholder="The Derby"
              />
            </label>
            <label>
              <p>Date</p>
              <input
                onChange={handleChange}
                type="text"
                name="date"
                placeholder="16 June 2023"
              />
            </label>
            <label>
              <p>Location</p>
              <input
                onChange={handleChange}
                type="text"
                name="location"
                placeholder="Epsom Downs"
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
            {hracedata1.map((item) => (
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
                    onChange={handleFields}
                    type="text"
                    data-index={item.id}
                    name="name"
                    placeholder={item.username}
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
                    type="text"
                    name="country"
                    data-index={item.id}
                    placeholder={item.country}
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
                    type="text"
                    name="rank"
                    placeholder={item.rank}
                    data-index={item.id}
                  />
                </label>
                <div className="board">
                  <label htmlFor="image">
                    Upload <br /> Image
                  </label>
                  <input
                    type="file"
                    id="upload"
                    name="image"
                    onChange={handleFields}
                    data-index={item.id}
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
            {hracedata2.map((item) => (
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
                    onChange={handleFields}
                    data-index={item.id}
                    type="text"
                    name="name"
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
                    data-index={item.id}
                    type="text"
                    name="country"
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
                    data-index={item.id}
                    type="text"
                    name="rank"
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
                    onChange={handleFields}
                    data-index={item.id}
                  />
                </div>
              </div>
            ))}
          </Form>
        </PlayerTable>
      </SoccerContainer1>
    </UfcContainer>
  );
}

export default HorseRace;
