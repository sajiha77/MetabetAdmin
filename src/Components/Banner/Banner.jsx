import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { UfcContainer, ContainerRight, Checkbutton } from "./Banner.styles";
import axios from "axios";
import { API } from "../../api/API";

function Banner() {
  const [getData, setgetData] = useState([]);
  const [data, setData] = useState({
    name: "Home",
    img: "",
  });
  useEffect(() => {
    axios
      .get(`${API}/getBanner`)
      .then((res) => setgetData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  }, []);
  console.log(data, "data");

  const uploadBanner = async () => {
    let formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("testImage", data.img);
    console.log(formdata);
    var config = {
      method: "post",
      url: `${API}/uploadBanner`,

      data: formdata,
    };
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const Text = [
    {
      id: 1,
      title: "Featured Event Landing Page",
    },
    {
      id: 2,
      title: "Recent Bets Header",
    },
    {
      id: 3,
      title: "Recent Bets Footer",
    },
    {
      id: 4,
      title: "Active Header",
    },
    {
      id: 5,
      title: "Active Footer",
    },
  ];
  const Text1 = [
    {
      id: 1,
      title: "History Header",
    },
    {
      id: 2,
      title: "History Footer",
    },
    {
      id: 3,
      title: "Live Bets Footer",
    },
    {
      id: 4,
      title: "Event Ended Footer crypto pool",
    },
  ];

  return (
    <>
      <UfcContainer>
        <ContainerRight>
          <div className="border">
            <p> Upload the banner </p>{" "}
            <label htmlFor="icon">
              <i className="fa-sharp fa-solid fa-circle-plus"> </i>{" "}
            </label>{" "}
            <input
              type="file"
              id="icon"
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  img: e.target.files[0],
                }))
              }
            />
          </div>{" "}
          <Checkbutton>
            <p> Use Checkbox to select the banner destination </p>{" "}
            <Form>
              <div className="box">
                <div className="form-check">
                  {" "}
                  {Text.map((item) => (
                    <div className="list">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        {" "}
                        {item.title}{" "}
                      </label>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
                <div className="form-check">
                  {" "}
                  {Text1.map((item) => (
                    <div className="list">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        {" "}
                        {item.title}{" "}
                      </label>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>{" "}
            </Form>{" "}
          </Checkbutton>{" "}
          <button onClick={uploadBanner}> Update </button>{" "}
        </ContainerRight>{" "}
      </UfcContainer>

      {getData?.map((singleData) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(singleData.img.data.data))
        );
        return (
          <img
            src={`data:image/png;base64,${base64String}`}
            width="100%"
            style={{ margin: "50px 0 0 0" }}
          />
        );
      })}
    </>
  );
}

export default Banner;
