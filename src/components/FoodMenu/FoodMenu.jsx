import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import FoodMenuItem from "./FoodMenuItem";
import { ButtonCommon } from "../Button/Button";

const foodMenu = [
  {
    title: "Pie of the Day",
    price: "10.5",
    subTitle: "Homemade pie with sides",
  },
  {
    title: "Hot Dish of the Day",
    price: "10.5",
    subTitle: "See specials board",
  },
  {
    title: "Soup of the Day",
    price: "6.5",
    subTitle: "With buttered white or brown bloomer",
  },
  {
    title: "Prawn Marie Rose",
    price: "9.5",
    subTitle: "Served on bloomer with salad, pickles and crisps",
  },
  {
    title: "Chicken, Bacon & Avocado Salad",
    price: "9.8",
    subTitle: "With mixed seeds and balsamic glaze",
  },
  {
    title: "Club Sandwich",
    price: "9.5",
    subTitle: "Chicken, bacon, lettuce, tomato. Served with sides",
  },
  {
    title: "BLT",
    price: "9.5",
    subTitle: "Bacon, lettuce and tomato with sides",
  },
  {
    title: "Cheese Toastie",
    price: "8 - 9",
    subTitle: "Choice of fillings available",
  },
  {
    title: "Chips",
    price: "3.5",
  },
  {
    title: "Grilled Halloumi",
    price: "3.5",
  },
  {
    title: "Halloumi Fries",
    price: "4.5",
  },
];

export default function FoodMenuHome({ styleTwo }) {
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <SectionTitle
          title={"Lunch"}
          subTitle={"Freshly prepared, served all day"}
          tyle={"center"}
        />
        <div className="ak-height-65 ak-height-lg-30"></div>

        {styleTwo == true ? (
          <div className="d-flex justify-content-between flex-wrap gap-5 gap-md-0">
            <div className="ak-menu-list style-2">
              {foodMenu?.slice(0, 5).map((item, index) => {
                return <FoodMenuItem key={index} data={item} />;
              })}
            </div>
          </div>
        ) : (
          <div className="ak-menu-list">
            {foodMenu?.map((item, index) => {
              return <FoodMenuItem key={index} data={item} />;
            })}
          </div>
        )}

        <div className="ak-height-20 ak-height-lg-20"></div>

        <div className="text-md-center">
          <ButtonCommon to="/menu">View more</ButtonCommon>
        </div>
      </div>
    </section>
  );
}