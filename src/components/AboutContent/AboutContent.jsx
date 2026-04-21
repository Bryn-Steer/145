import React, { useLayoutEffect, useRef } from "react";
import { ButtonCommon } from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import { borderAnimation, imageZoomInOut } from "../../helper/main";

const about_content = {
  title: "Royalty",
  textWhite: "A Café Experience Designed for",
  imgOne: "/assets/img/about/about_bg.svg",
  subtext:
    "Discover a thoughtfully curated menu of coffee, brunch, and light bites, crafted with precision and served with care to elevate your everyday moments.",
  details:
    "A café at its core. Built on quality, consistency, and atmosphere. From expertly brewed coffee to freshly prepared plates, everything is designed to create a space where you can slow down, reset, and enjoy the experience.",
};

const { title, textWhite, imgOne, subtext, details } = about_content;

export default function AboutContent() {
  const imageContainer = useRef(null);
  const imageZoomIn = useRef(null);
  const borderAbout = useRef(null);

  useLayoutEffect(() => {
    imageZoomInOut(imageContainer.current, imageZoomIn.current);
    borderAnimation(borderAbout.current, 2, 13);
  }, []);

  return (
    <section className="ak-about-bg-color" ref={imageContainer}>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="ak-about ak-style-1">
        <div className="ak-about-bg-img ak-bg">
          <img src={imgOne} alt="..." ref={imageZoomIn} />
        </div>
        <div className="ak-about-hr" ref={borderAbout}></div>
        <div className="container">
          <div className="about-section ak-about-1">
            <div className="about-text-section">
              <SectionTitle title={title} textWhite={textWhite} />

              <div className="ak-height-30 ak-height-lg-30"></div>
              <p className="about-subtext">{details}</p>
              <div className="ak-height-30 ak-height-lg-30"></div>
              <p className="about-subtext">{subtext}</p>
              <div className="ak-height-50 ak-height-lg-30"></div>
              <ButtonCommon to={"/about"}>Discover The Kitchen</ButtonCommon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
