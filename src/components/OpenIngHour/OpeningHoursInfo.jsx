import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ImgesOverlay from "../ImgesOverlay/ImgesOverlay";
import { ButtonCommon } from "../Button/Button";
import classNames from "classnames";

const Openinginfo = {
  title: "Our Hours",
  image: "/assets/img/about/about_open_hour.svg",
  subtext:
    "From sunrise brews to evening bites. Always fresh, always heartfelt.",
  open: "MONDAY - FRIDAY: 08:00AM - 17:00PM",
  close: "FRIDAY & SATURDAY: 09:00AM - 17:00PM",
};

export default function OpeningHoursInfo({ typeTwo }) {
  const { title, image, subtext, open, close } = Openinginfo;

  const openingHour = classNames("opening-hour", {
    "type-2": typeTwo,
  });

  const openingHourimg = classNames("opening-hour-img-section", {
    "style-2": typeTwo,
  });
  const openingHourtext = classNames("opening-hour-text-section", {
    "type-2": typeTwo,
  });
  return (
    <>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className={typeTwo ? "container" : "ak-bg-secendary"}>
        <div className={openingHour}>
          <div className={openingHourimg}>
            <ImgesOverlay image={image} imagesZoom={true} />
          </div>
          <div className={openingHourtext}>
            <SectionTitle title={title} animTwo={true} />
            <div className="ak-height-30 ak-height-lg-30"></div>
            <p className="opening-hour-subtext">{subtext}</p>
            {open && close ? (
              <>
                <div className="ak-height-30 ak-height-lg-30"></div>
                <div className="opening-hour-date">
                  <p>{open}</p>
                  <div className="opening-hour-hr"></div>
                  <p> {close}</p>
                </div>
              </>
            ) : (
              ""
            )}

            <div className="ak-height-70 ak-height-lg-30"></div>
            <ButtonCommon to="/reservations">Reservation</ButtonCommon>
          </div>
        </div>
      </div>
    </>
  );
}
