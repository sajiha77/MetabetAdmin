import React, { useState } from "react";
import { AirContainer, Form, Input, Socials, Input1 } from "./Airdrop.styles";
import { AirdropData, Data } from "./AirdropData";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import { uploadAPI } from "../../api/API";
function Airdrop() {
  const [addStyle, setAddStyle] = useState();

  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=football",
      url: `${uploadAPI}?q=football`,
      data: { ...bannerData, ...eventData },
    });
  };
  return (
    <AirContainer>
      <Socials>
        {Data.map((item) => (
          <button
            onClick={() => setAddStyle(item.id)}
            style={
              item.id === addStyle
                ? { background: "#4C5FBB" }
                : { background: "#ebeff7" }
            }
          >
            <img src={item.icon} alt="icon" />
          </button>
        ))}
      </Socials>
      <Form>
        {AirdropData.map((item) => (
          <div className="label-btn">
            <label
              style={{
                background: item.backgroundColor && item.backgroundColor,
                color: item.color && item.color,
              }}
            >
              <Input1
                getColor={item.color_1}
                onChange={handleChange}
                type="text"
                name={item.name}
                placeholder={item.title}
              />
              <div>
                <Input
                  getColor={item.color_1}
                  onChange={handleChange}
                  type="text"
                  name={item.name}
                  placeholder={item.placeholder}
                />
                $
              </div>
            </label>
            <button>{item.button}</button>
          </div>
        ))}
      </Form>
    </AirContainer>
  );
}

export default Airdrop;
