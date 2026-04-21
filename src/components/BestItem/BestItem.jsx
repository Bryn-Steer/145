import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ImgesOverlay from "../ImgesOverlay/ImgesOverlay";

const bestItem = {
  title: "Henritte Petite",
  textWhite: "Our",
  imgOne: "/assets/img/bestItem/bestItem1.jpg",
  imgTwo: "/assets/img/bestItem//bestItem2.jpg",
  details:
    "Our café is inspired by Henriette Petite, the owner’s French grandmother. Though she stood only five feet tall, she had a talent for creating pastries that felt larger than life. As children, the family would watch her climb onto a little stool to reach her mixing bowls, whisk in hand, filling the kitchen with the smell of butter and sugar. That image of determination and love for good food became the heart of Henriette Petite Café — a place that celebrates her warmth, laughter, and the joy of sharing something homemade.",
};

export default function BestItem() {
  const { imgOne, imgTwo, details, title } = bestItem;
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <div className="ak-best-item">
          <div className="best-item-section-1">
            <SectionTitle title={title} textWhite={"Our"} />
            <div className="ak-height-30 ak-height-lg-30"></div>
            <p>{details}</p>
            <div className="ak-height-50 ak-height-lg-30"></div>
            <div className="img-one">
              <ImgesOverlay image={imgTwo} />
            </div>
          </div>
          <div className="best-item-section-2" data-speed="1.1" data-lag="1">
            <img src="/assets/img/icon/star_line.svg" alt="..." />
          </div>
          <div className="best-item-section-3">
            <div className="img-two">
              <ImgesOverlay image={imgOne} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
