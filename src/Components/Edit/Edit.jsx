import React from "react";
import { CricketData } from "../Cricket/CricketData";
import { UfcContainer, Form, ContainerRight, Input } from "../UFC/UFC.styles";

const Edit = ({ editPostID, postList }) => {
  console.log("first", editPostID, postList);
  return (
    <UfcContainer>
      <Form>
        {CricketData.map((item) => (
          <label
            style={{
              background: item.backgroundColor && item.backgroundColor,
              color: item.color && item.color,
            }}
          >
            {item.title}
            <Input
              getColor={item.color}
              style={{
                color: item.color && item.color,
              }}
              // onChange={handleChange}
              type="text"
              name={item.name}
              placeholder={item.placeholder}
            />
          </label>
        ))}
      </Form>
      <div className="right-pannel">
        <div className="pannel">
          <ContainerRight>
            <div className="border">
              <div>
                <span>Event banner</span>
                <span>(if applicable)</span>
              </div>
              <label htmlFor="icon">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon"
                name="banner"
                // onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>Team 1 Flag</span>
              <label htmlFor="icon1">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon1"
                name="t1NationalFlag"
                // onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>Upload Preview Video</span>
              <label htmlFor="icon2">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon2"
                name="t2NationalFlag"
                // onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>Upload Footer Banner</span>
              <label htmlFor="icon2">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon2"
                name="t2NationalFlag"
                // onChange={handleBanner}
              />
            </div>
          </ContainerRight>
          <ContainerRight>
            <div className="border">
              <span>Contest banner *</span>
              <label htmlFor="icon">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon"
                name="banner"
                // onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>Team 2 Flag</span>
              <label htmlFor="icon1">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon1"
                name="t1NationalFlag"
                // onChange={handleBanner}
              />
            </div>
            <div className="border">
              <span>Upload Prediction Video</span>
              <label htmlFor="icon2">
                <img src="https://img.icons8.com/fluency-systems-filled/48/null/upload.png" />
              </label>
              <input
                type="file"
                id="icon2"
                name="t2NationalFlag"
                // onChange={handleBanner}
              />
            </div>
          </ContainerRight>
        </div>
        <button>Submit</button>
      </div>
    </UfcContainer>
  );
};

export default Edit;
