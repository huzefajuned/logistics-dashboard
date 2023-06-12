import React, { useEffect, useState } from "react";
import { SingleNotificationProps } from "../interface/types";

// SingleNotification---
// it will only recieves array of notifications containing---
//{notification_title,notification_subtitle,notification_icon,notification_time}---
const SingleNotification: React.FC<{ data: SingleNotificationProps[] }> = ({
  data,
}) => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <>
      {data.map((entry: SingleNotificationProps, index: number) => {
        const {
          notification_title,
          notification_subtitle,
          notification_icon,
          notification_time,
        } = entry; //  Destructring && assingning value---
        return (
          <div
            key={index}
            className=" flex flex-row justify-between items-start p-3"
          >
            <div className="flex flex-row items-center">
              <div className="bg-[#FF9900] w-[40px] h-[40px] rounded-full m-auto p-1 ">
                {notification_icon}
              </div>
              <div className=" flex flex-col  text-left ml-2">
                <p className="font-semibold text-sm text-secondary dark:text-primary-50 tracking-wide">
                  {notification_title}
                </p>
                <p className=" font-light text-xs tracking-tighter text-secondary-70  dark:text-secondary-40">
                  {notification_subtitle}
                </p>
              </div>
            </div>
            <div className="mr-1 truncate ">
              <p className="font-light text-xs  text-left tracking-tighter text-secondary-70">
                {notification_time}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleNotification;
