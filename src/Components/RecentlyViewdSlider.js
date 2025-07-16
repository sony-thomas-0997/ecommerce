import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useSelector } from "react-redux";
import "./RecentlyViewdSlider.css"
import { NavLink } from "react-router";


function RecentlyViewdSlider() {
  let [recentDataToDisplay, setRecentDataToDisplay] = useState();

  let recentlyViewdStoreToComponent = useSelector((state) => {
    return state.RecentlyViewdstoreArray;
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  const handleDragStart = (e) => e.preventDefault();

  useEffect(() => {
    let recentdatamap = recentlyViewdStoreToComponent.map((item, index) => {
      return (
                 <NavLink to={`/Product-details/${item.id}`}>
        <div className="each-element-recent">
          <img
            className="image-size"
            onDragStart={handleDragStart}
            role="presentation"
            src={require(`../images/All-prdt-images/${item.pictures.pic1}`)}
            alt="can't load"
          />
          <Typography variant="body1">{item.brand}</Typography>
          <Typography variant="body2">₹ {item.price}</Typography>
        </div>
        </NavLink>
      );
    });
    setRecentDataToDisplay(recentdatamap);
  }, [recentlyViewdStoreToComponent]);

  return (
    <div className="">
      <div className="div-of-recent-list">
        <Typography>Recently Viewed</Typography>
        <AliceCarousel
          mouseTracking
          items={recentDataToDisplay}
          responsive={responsive}
          loop={true}
         
        />
      </div>
    </div>
  );
}

export default RecentlyViewdSlider;
