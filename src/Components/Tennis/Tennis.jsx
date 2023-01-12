import React from "react";
import { useAxios } from "../../hooks/useAxios";
import { UfcContainer, Form, ContainerRight } from "../UFC/UFC.styles";
import { TennisData } from "./TennisData";
import { useBanner } from "../../hooks/useBanner";
import { uploadAPI } from "../../api/API";

function Tennis() {
  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      url: `${uploadAPI}?q=tennis`,
      data: { ...bannerData, ...eventData },
    });
  };

  return (
    <UfcContainer>
      <Form>
        {TennisData.map((item) => (
          <label
            style={{ background: item.backgroundColor && item.backgroundColor }}
          >
            {item.title}
            <input
              onChange={handleChange}
              type="text"
              name={item.name}
              placeholder={item.placeholder}
            />
          </label>
        ))}
      </Form>
      <ContainerRight>
        <div className="border">
          <p>Upload the banner</p>
          <label htmlFor="icon">
            <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
          </label>
          <input type="file" name="banner" onChange={handleBanner} id="icon" />
        </div>
        <button>Update</button>
        <div className="border">
          <p>Upload player One Image</p>
          <label htmlFor="icon1">
            <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
          </label>
          <input
            type="file"
            name="playerOneImg"
            onChange={handleBanner}
            id="icon1"
          />
        </div>
        <button>Update</button>
        <div className="border">
          <p>Upload player Two Image</p>
          <label htmlFor="icon2">
            <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
          </label>
          <input
            type="file"
            name="playerTwoImg"
            onChange={handleBanner}
            id="icon2"
          />
        </div>
        <button onClick={uploadEvent}>Update</button>
      </ContainerRight>
    </UfcContainer>
  );
}

export default Tennis;
