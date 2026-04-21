import React from "react";

export default function FoodMenuItem({ data }) {
  const { title, price, subTitle, priceSubTitle } = data;

  return (
    <div className="ak-menu-list-section-1">
      <div className="food-menu style-1">
        <div className="food-menu-section-1">
          <div className="food-menu-title">
            <p>{title}</p>
          </div>

          {/* REMOVE THE LINE COMPLETELY */}

          <div className="food-menu-price">
            <p>{price}</p>
          </div>
        </div>

        <div className="food-menu-section-2">
          <div className="food-menu-subsitle">
            <p>{subTitle}</p>
          </div>

          <div className="food-menu-price-subsitle">
            <p>{priceSubTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}