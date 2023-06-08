import React from "react";

export default function Shimmer({ tilesCount }) {
  const shimmerCards = [...Array(tilesCount)].map((val,index) => {
    return (
      <div key={index} className="w-72 h-72 m-2 p-2 border-solid border-2 border-slate-200">
        <div className="h-40 mb-2 rounded-md bg-slate-200"></div>
      </div>
    );
  });
  return <div className="flex flex-wrap">{shimmerCards}</div>;
}
