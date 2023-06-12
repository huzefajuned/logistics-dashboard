"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import mapImg from "../../public/images/map.png";
import { Button } from "antd";

const Maps = () => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div className="w-[585px] max-h-[299px] flex flex-col justify-between relative border-[1px] border-secondary-40 rounded-lg dark:border-none ">
      <Image
        src={mapImg}
        width={580}
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
