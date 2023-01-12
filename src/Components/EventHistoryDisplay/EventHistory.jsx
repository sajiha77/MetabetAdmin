import React, { useEffect } from "react";
import styled from "styled-components";
import Loading from "../Loading/Loading";
import { Outlet, useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { getBannersData } from "../../api/API";
import { BitcoinData } from "../Bitcoin/BitcoinData";

const EventHistoryDisplay = () => {
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `${getBannersData}?q=bitcoin`,
    });
  };

  useEffect(() => {
    getBanners();
  }, []);

  const renderData = response?.map((item, index) => {
    return (
      <div className="input-wrapper" key={index}>
        <label>
          <span>Event Name:</span>
          <input
            placeholder={item.eventName ? item.eventName : "previousData"}
            disabled
          />
        </label>
        <button onClick={() => navigate("EditDetails", { state: item })}>
          Edit
        </button>
      </div>
    );
  });

  return (
    <>
      <EventHistoryPage>
        {loading ? (
          <Loading />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {renderData}
          </div>
        )}
      </EventHistoryPage>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

const EventHistoryPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  max-width: 500px;
  margin: 40px auto 0;
  text-align: center;
  @media screen and (max-width: 1100px) {
    margin: 40px 10px;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  label {
    background: #ebeff7;
    padding: 10px;
    border-radius: 100px;
  }

  a,
  button {
    background: #344bba;
    border-radius: 100px;
    text-decoration: none;
    color: #fff;
    padding: 8px 30px;
    border: none;
    cursor: pointer;
  }
`;

export default EventHistoryDisplay;
