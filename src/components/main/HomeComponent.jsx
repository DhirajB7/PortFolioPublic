import React from "react";
import style from "../../styles/MainComponent.module.css";
import SlideComponent from "../helper/SlideComponent";
import DhirajImage from "../../images/dhb.png";

const HomeComponent = () => {
  return (
    <div className={style.homeComponent}>
          <SlideComponent direction="right">
        <div className={style.homeComponentImageContainer}>
          <img
            className={style.homeComponentImage}
            src={DhirajImage}
            alt="Dhiraj in a boat"
          />
        </div>
        </SlideComponent>
        <SlideComponent direction="down">
        <div className={style.homeComponentText}>
          <h1 className={style.homeComponentHeading}>I'm <span className={style.fsd} >Dhiraj</span></h1>
          <div className={style.homeComponentBody}>
            Working as <span style={{color:"#be3144"}}>Front End Developer</span>.<br/> Feel free to navigate the
            portfolio, Cheers 🍺
          </div>
        </div>
    </SlideComponent>
      </div>
  );
};

export default HomeComponent;