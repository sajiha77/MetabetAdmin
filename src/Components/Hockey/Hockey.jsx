import React from "react";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import { UfcContainer, Form, ContainerRight } from "../UFC/UFC.styles";
import { hData } from "./HockeyData";

function Hockey() {
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();
  const { fetchData } = useAxios();

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=football",
      url: `${uploadAPI}?q=hockey`,
      data: { ...bannerData, ...eventData },
    });
  };
  return (
    <UfcContainer>
      <Form>
        {hData.map((item) => (
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
          <input type="file" id="icon" name="banner" onChange={handleBanner} />
        </div>
        <button>Update</button>
        <div className="border">
          <p>
            Upload Team One <br /> National Flag
          </p>
          <label htmlFor="icon1">
            <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
          </label>
          <input
            type="file"
            id="icon1"
            name="t1NationalFlag"
            onChange={handleBanner}
          />
        </div>
        <button>Update</button>
        <div className="border">
          <p>
            {" "}
            Upload Team TWO <br /> National Flag
          </p>
          <label htmlFor="icon2">
            <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
          </label>
          <input
            type="file"
            id="icon2"
            name="t2NationalFlag"
            onChange={handleBanner}
          />
        </div>
        <button onClick={uploadEvent}>Update</button>
      </ContainerRight>
    </UfcContainer>
  );
}

export default Hockey;
