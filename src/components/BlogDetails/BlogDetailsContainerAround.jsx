import React, { useEffect, useRef } from "react";
import { imageZoomInOut } from "../../helper/main";

export default function BlogDetailsContainerAround({ props }) {
  const container = useRef();
  const blogImg = useRef();

  useEffect(() => {
    if (container.current && blogImg.current) {
      imageZoomInOut(container.current, blogImg.current);
    }
  }, []);

  return (
    <div ref={container}>
      <div className="ak-height-50 ak-height-lg-30"></div>

      <img
        className="imagesZoom"
        src={props?.img}
        alt={props?.title || "Blog image"}
        ref={blogImg}
      />

      <div className="ak-height-75 ak-height-lg-30"></div>

      <p>{props?.desp}</p>

      <div className="ak-height-75 ak-height-lg-30"></div>

      <div className="quote-option">
        <div className="testimonial-section">
          <div className="testimonial-icon-1">
            <img src="/assets/img/icon/testimonial_icon_l.svg" alt="Quote left" />
          </div>

          <div className="testimonial-info-section">
            <div className="testimonial-info">
              <p className="testimonial-info-subtitle">{props?.testimonial}</p>
            </div>
          </div>

          <div className="testimonial-icon-1">
            <img src="/assets/img/icon/testimonial_icon_r.svg" alt="Quote right" />
          </div>
        </div>
      </div>

      <div className="ak-height-75 ak-height-lg-30"></div>

      <h4 className="anim-title-2 ak-white-color">{props?.shortTitle}</h4>

      <div className="ak-height-20 ak-height-lg-20"></div>

      <p>{props?.shortDesc}</p>

      <div className="ak-height-75 ak-height-lg-30"></div>

      <p>{props?.shortDescTwo}</p>

      <div className="ak-height-75 ak-height-lg-30"></div>
    </div>
  );
}