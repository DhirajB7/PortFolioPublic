import React from "react";
import style from "../../styles/MainComponent.module.css";
import OneSkill from "../helper/OneSkill";
import html from "../../images/skills/html.png";
import css from "../../images/skills/css.png";
import js from "../../images/skills/js.png";
import sass from "../../images/skills/sass.png";
import react from "../../images/skills/react.png";
import redux from "../../images/skills/redux.png";
import mui from "../../images/skills/mui.png";
import ant from "../../images/skills/ant.png";
import bootstrap from "../../images/skills/bootstrap.png";
import git from "../../images/skills/git.png";
import java from "../../images/skills/java.png";
import sb from "../../images/skills/springBoot.png";
import dw from "../../images/skills/dropwizard.png";
import pssql from "../../images/skills/pssql.png";
import mdb from "../../images/skills/mongo.png";
import sel from "../../images/skills/selenium.png";
import gc from "../../images/skills/gc.png";
import reactNative from "../../images/skills/reactNative.png";
import firebase from "../../images/skills/firebase.png"

const data = [
  { name: "html", path: html, alt: "html" },
  { name: "css", path: css, alt: "css" },
  { name: "sass", path: sass, alt: "sass" },
  { name: "material ui", path: mui, alt: "mui" },
  { name: "ant design", path: ant, alt: "ant" },
  { name: "bootstrap", path: bootstrap, alt: "bootstrap" },
  { name: "javascript", path: js, alt: "js" },
  { name: "react", path: react, alt: "react" },
  { name: "redux", path: redux, alt: "redux" },
  { name: "react Native", path: reactNative, alt: "react Native" },
  { name: "firebase", path: firebase, alt: "Firebase" },
  { name: "git", path: git, alt: "git" },
  { name: "google cloud", path: gc, alt: "google cloud" },
  { name: "java", path: java, alt: "java" },
  { name: "spring boot", path: sb, alt: "spring boot" },
  { name: "dropwizard", path: dw, alt: "dropwizard" },
  { name: "postgresql", path: pssql, alt: "postgre sql" },
  { name: "mongo db", path: mdb, alt: "mongo db" },
  { name: "selenium", path: sel, alt: "Selenium" },
];

const SkillComponent = () => {
  return (
    <div className={style.skillComponent}>
      {data.map((a) => (
        <OneSkill skill={a} key={a.name} direction="right" />
      ))}
    </div>
  );
};

export default SkillComponent;
