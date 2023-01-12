import React from "react";
import { UfcContainer, Form, ContainerRight } from "../UFC/UFC.styles";
import { BoxingData } from "./BoxingData";
import { useAxios } from "../../hooks/useAxios";
import { useBanner } from "../../hooks/useBanner";
import { uploadAPI } from "../../api/API";

function Boxing() {
  const { fetchData } = useAxios();
  const { bannerData, handleBanner, handleChange, eventData } = useBanner();

  const uploadEvent = async () => {
    await fetchData({
      method: "POST",
      // url: "http://localhost:5002/uploadEvent?q=football",
      url: `${uploadAPI}?q=boxing`,
      data: { ...bannerData, ...eventData },
    });

    console.log({ response, loading, error }, "response");
  };
  return (
    <UfcContainer>
      <Form>
        {BoxingData.map((item) => (
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
          <p>Upload Boxer ONE image</p>
          <label htmlFor="icon1">
            <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
          </label>
          <input
            type="file"
            id="icon1"
            name="b1Image"
            onChange={handleBanner}
          />
        </div>
        <button>Update</button>
        <div className="border">
          <p>Upload Boxer TWO image</p>
          <label htmlFor="icon2">
            <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
          </label>
          <input
            type="file"
            id="icon2"
            name="b2Image"
            onChange={handleBanner}
          />
        </div>
        <button onClick={uploadEvent}>Update</button>
      </ContainerRight>
    </UfcContainer>
  );
}

export default Boxing;
