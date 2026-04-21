import React from "react";

const movingText = [
  {
    white: "Taste bold coffee and soft eggs ",
    yellow: "Fair price and joy in every bite ",
  },
  {
    white: "Taste bold coffee and soft eggs ",
    yellow: "Fair price and joy in every bite ",
  },
];

export default function MovingText() {
  return (
    <div className="ak-moving-section-wrap ak-normal text-uppercase">
      <div className="ak-moving-section-in">
        {movingText?.map((text, i) => (
          <div className="ak-moving-section" key={i}>
            <h2>
              {text.white} <span>{text.yellow}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
