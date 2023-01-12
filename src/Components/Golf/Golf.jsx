import React, { useState } from "react";
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
} from "./Golf.styles";
import { golfData1, golfData2 } from "./GolfData";
function Golf() {
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
      url: `${uploadAPI}/uploadEvent?q=golf`,
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
          </div>
          <div className="event">
            <label>
              <p> Location</p>
              <input
                onChange={handleChange}
                type="text"
                name="location"
                placeholder="Augusta USA"
              />
            </label>
            <label htmlFor="btn">
              <div className="button"> Upload image</div>
            </label>
            <input type="file" name="image" id="btn" onChange={handleBanner} />
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
            {golfData1.map((item) => (
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
                    placeholder={item.username}
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
                    type="text"
                    name="country"
                    placeholder={item.country}
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
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
            {golfData2.map((item) => (
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
                    placeholder={item.username}
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
                    type="text"
                    name="country"
                    placeholder={item.country}
                  />
                  <input
                    id="input2"
                    onChange={handleFields}
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
                    onChange={handleFields}
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

export default Golf;
