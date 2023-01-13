import React, { useContext, useEffect, useMemo } from "react";
import styled from "styled-components";
import Loading from "../Loading/Loading";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { getBannersData } from "../../api/API";
import { BitcoinData } from "../Bitcoin/BitcoinData";
// import { Context } from "../../hooks/useContext";

const EventHistoryDisplay = ({ query }) => {
  // const { setItems } = useContext(Context);
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `${getBannersData}?q=${query}`,
    });
  };

  useEffect(() => {
    getBanners();
  }, [query]);

  // console.log("first", items);

  useEffect(() => {}, [navigate]);
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
        <button
          onClick={() => navigate(`EditDetails/${item._id}`, { state: item })}
        >
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
          <>
            <div className="create-btn-wrapper">
              <NavLink to="create" className="createNewBtn">
                Create New Event
              </NavLink>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {renderData}
            </div>
          </>
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
  /* max-width: 560px; */
  width: 100%;
  margin: 40px auto 0;
  text-align: center;

  @media screen and (max-width: 1100px) {
    margin: 40px 10px;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
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
    font-weight: 700;
    padding: 8px 30px;
    border: none;
    cursor: pointer;
  }
  .create-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 0px 30px;
  }

  .createNewBtn {
    padding: 10px 30px;
    /* max-width: 180px; */
    /* margin: 0 auto 25px; */
  }
`;

export default EventHistoryDisplay;
