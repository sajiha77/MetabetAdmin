import React, { useState } from "react";
import { useArray } from "../../hooks/useArray";
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
import { darts1, darts2 } from "./DartsData";
function Darts() {
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
      url: "http://localhost:5002/uploadEvent?q=darts",
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
                placeholder="PDC World Darts Championship"
              />
            </label>
            <label>
              <p>Date</p>
              <input
                onChange={handleChange}
                type="text"
                name="date"
                placeholder="January 15 2023"
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
            {darts1.map((item) => (
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
                    name="name"
                    data-index={item.id}
                    placeholder={item.name}
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
                    type="text"
                    data-index={item.id}
                    name="country"
                    placeholder={item.country}
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
                    type="text"
                    data-index={item.id}
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
                    data-index={item.id}
                    onChange={handleFields}
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
            {darts2.map((item) => (
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
                    name="name"
                    data-index={item.id}
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
                    type="text"
                    name="country"
                    data-index={item.id}
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
                    type="text"
                    data-index={item.id}
                    name="rank"
                  />
                </label>
                <div className="board">
                  <label htmlFor="upload">
                    Upload <br /> Image
                  </label>
                  <input
                    type="file"
                    data-index={item.id}
                    id="upload"
                    onChange={handleFields}
                    name="image"
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

export default Darts;
