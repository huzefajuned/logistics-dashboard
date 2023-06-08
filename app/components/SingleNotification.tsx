import React, { useEffect, useState } from "react";
import { NotificationProps } from "../interface/types";

const SingleNotification: React.FC<any> = ({ data }: any) => {
  console.log("data", data);
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <>
      {data.map((entry: NotificationProps) => {
        return (
          <div className=" flex flex-row justify-between items-start p-3">
            <div className="flex flex-row items-center">
              <p className="bg-[#FF9900] w-[40px] h-[40px] rounded-full m-auto p-1 ">
                {entry.notification_icon}
                {/* <MessageOutlined className="text-xl font-light text-primary-50  " /> */}
              </p>
              <div className=" flex flex-col  text-left ml-2">
                <p className="font-semibold text-sm text-secondary tracking-wide">
                  {entry.notification_title}
                </p>
                <p className=" font-light text-xs tracking-tighter text-secondary-70 ">
                  {entry.notification_subtitle}
                </p>
              </div>
            </div>
            <div className="mr-1 truncate ">
              <p className="font-light text-xs  text-left tracking-tighter text-secondary-70">
                {entry.notification_time}
              </p>
            </div>
          </div>
        );
      })}
    </>

    // </div>
  );
};

export default SingleNotification;
