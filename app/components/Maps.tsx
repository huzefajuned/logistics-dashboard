"use client";
import Image from "next/image";
import React from "react";
import mapImg from "../../public/images/map.png";
import { Button } from "antd";

const Maps = () => {
  return (
    <div className="w-[585px] max-h-[299px] flex flex-col justify-between relative p-[10px] border-[1px] border-secondary-40 rounded-lg ">
      <Image
        src={mapImg}
        width={550}
        alt="mapImg"
        className="m-auto object-cover"
      />
      <Button
        type="default"
        className="bg-gradient-to-r from-primary-80 to-primary-90 text-primary-50 h-12 w-auto tracking-wide absolute bottom-5 right-5"
      >
        View Map
      </Button>
    </div>
  );
};

export default Maps;
