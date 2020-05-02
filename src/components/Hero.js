import React from "react";

function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

export default Hero;

// We use the default css selector for the hero component
Hero.defaultProps = {
  hero: "defaultHero",
};
