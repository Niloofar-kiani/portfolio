import React, {useEffect, useMemo} from "react";
import useStyles from "../assets/styles/styles";
import {useTheme} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import {setData, setLocation, setImage} from "../redux/reducers/weatherReducer";

const Weather = () => {
  const theme = useTheme();
  const {classes} = useStyles();
  const dispatch = useDispatch();
  const {data, location, image} = useSelector((state) => state.weather);

  const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;
  const image_url = "https://api.pexels.com/v1/search?query=";

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(weather_url);
        const data = await response.json();
        dispatch(setData(data));
        handleBackground(data.name);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
      dispatch(setLocation(""));
    }
  };

  const handleBackground = async (value) => {
    try {
      const response = await fetch(`${image_url}${value}`, {
        headers: {
          Authorization: `${process.env.REACT_APP_PEXEL_KEY}`,
        },
      });
      const res = await response.json();
      const imageSrc =
        res?.photos?.[Math.floor(Math.random() * 10)]?.src?.landscape || "";
      dispatch(setImage(imageSrc));
    } catch (error) {
      console.error("Error fetching image", error);
    }
  };
  const memoizedBackground = useMemo(() => {
    return (
      <div
        className={`${classes.home} ${classes.weatherContainer}`}
        style={{backgroundImage: `url(${image})`}}
      >
        <div className={classes.weather}>
          <input
            className={classes.searchInput}
            value={location}
            onChange={(e) => dispatch(setLocation(e.target.value))}
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
  }, [data, location, image]);

  useEffect(() => {
    handleBackground("Yerevan");
  }, []);

  return memoizedBackground;
};

export default Weather;
