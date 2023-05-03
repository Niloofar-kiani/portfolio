import React, {useState, useEffect} from "react";
import useStyles from "../assets/styles/styles";


import {useTheme} from "@mui/material/styles";

const Weather = () => {
  const theme = useTheme();
  const {classes} = useStyles();

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [image, setImage] = useState([]);


  const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d076711b51ce056a91498f8d2ae9c367`;
  const image_url = "https://api.pexels.com/v1/search?query=";

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(weather_url);
        const data = await response.json();
        setData(data);
        handleBackground(data.name);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
      setLocation("");
    }
  };

  const handleBackground = async (value) => {
    try {
      const response = await fetch(`${image_url}${value}`, {
        headers: {
          Authorization:
            "ZVrawsqNKRdcpwR4ySwJPvtormrNyoFn18FukClayWtY8EH3Ift8H48E",
        },
      });
      const res = await response.json();
      const imageSrc = res?.photos?.[ Math.floor(Math.random() * 10)]?.src?.landscape || "";
      setImage(imageSrc);
    } catch (error) {
      console.error("Error fetching image", error);
    }
  };
  useEffect(() => {
    handleBackground("Yerevan");
  }, []);
  return (
    <div
      className={`${classes.home} ${classes.weatherContainer}`}
      style={{backgroundImage: `url(${image})`}}
    >
      <div className={classes.weather}>
        <input
          className={classes.searchInput}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Enter a city name"
          type="text"
        />
      </div>
      <div className={classes.weatherWrapper}>
        <div className={classes.top}>
          <h2 className={classes.city}>{data.name}</h2>
          {data.main ? (
            <h2 className={classes.temp}>{data.main.temp.toFixed()}°C </h2>
          ) : null}
          {data.main ? (      
              <p className={classes.condition}>{data.weather[0].description}</p>
          ) : null}
        </div>
        {data.name !== undefined && (
          <div className={classes.bottom}>
            <div className={classes.feels}>
              <p>feels like: </p>
              {data.main ? <h3>{data.main.feels_like.toFixed()}°C</h3> : null}
            </div>
            <div className={classes.humidity}>
              <p>humidity:</p>
              {data.main ? <h3>{data.main.humidity.toFixed()}%</h3> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
