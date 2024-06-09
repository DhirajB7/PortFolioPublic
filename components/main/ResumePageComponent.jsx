import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import style from "../../styles/resume.module.css";
import resumefd from "../../public/image/resume/fd/Dhiraj_Resume.png";
import SlideComponent from "../helper/SlideComponent";
import Image from "next/image";
import Link from "next/link";

const ResumePageComponent = () => {
  const [dwn, setDwn] = useState(false);

  return (
    <div className={style.resumeComponent}>
      <SlideComponent direction="down">
        <h1 className={style.resumeComponentHeadingSub}>resume</h1>
      </SlideComponent>
      <SlideComponent direction="down">
        <div className={style.resumeComponentButtonContainer}>
          <Link
            href="/image/resume/fd/Dhiraj_Resume.pdf"
            download="Dhiraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button
              className={style.resumeComponentButton}
              variant="outlined"
              size="large"
              onClick={() => setDwn(true)}
            >
              DOWNLOAD RESUME
            </Button>
            <Snackbar
              open={dwn}
              autoHideDuration={5000}
              onClose={() => setDwn(false)}
              message="RESUME DOWNLOADED &#128513;"
              anchorOrigin={{ vertical: "down", horizontal: "right" }}
              variant
            />
          </Link>
        </div>
      </SlideComponent>

      <SlideComponent direction="right">
        <div className={style.resumeComponentImageContainer}>
          <Image
            className={style.resumeComponentImage}
            src={resumefd}
            alt="Dhiraj_Resume"
          />
        </div>
      </SlideComponent>
    </div>
  );
};

export default ResumePageComponent;
