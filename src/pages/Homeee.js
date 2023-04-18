import { Typography } from "@mui/material";
import useStyles from "../Styles";
import React, { useRef, useEffect } from "react";
import lampOff from "../assets/lamp-off.png";

const Home = () => {
  const { classes } = useStyles();

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const texts = ["If", "You", "Want", "a", "Web", "Designer", ":)"];
  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = 0.25;

  function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / 1;

    if (fraction > 1) {
      cooldown = 0.25;
      fraction = 1;
    }

    setMorph(fraction);
  }

  function setMorph(fraction) {
    text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    text1Ref.current.textContent = texts[textIndex % texts.length];
    text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
  }

  function doCooldown() {
    morph = 0;

    text2Ref.current.style.filter = "";
    text2Ref.current.style.opacity = "100%";

    text1Ref.current.style.filter = "";
    text1Ref.current.style.opacity = "0%";
  }

  function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++;
      }

      doMorph();
    } else {
      doCooldown();
    }
  }

  useEffect(() => {
    animate();
  }, []);

  return (
    <div>
      <img src={lampOff} className={classes.lamp} />
      <div className={classes.heroTxt}>
        <Typography variant="h2" style={{ fontWeight: 800 }}>
          <span ref={text1Ref}></span>
        </Typography>
        <Typography
          variant="h4"
          style={{ fontWeight: 300, textTransform: "uppercase", marginTop: 20 }}
        >
          <span ref={text2Ref}></span>
        </Typography>
      </div>
      <div>
        <span className={classes.text1}></span>
        <span className={classes.text2}></span>
      </div>
      <svg id="filters">
        <defs>
            <filter id="threshold">
                <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140" />
            </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Home;
