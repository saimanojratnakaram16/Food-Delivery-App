import React from "react";
import "./Shimmer.css";

export default function Shimmer({ tilesCount }) {
  const shimmerCards = [...Array(tilesCount)].map((val,index) => {
    return (
      <div key={index} className="restaurent-card">
        <div className="restaurent-img"></div>
        <div className="restaurent-info"></div>
      </div>
    );
  });
  return <div className="shimmer">{shimmerCards}</div>;
}
