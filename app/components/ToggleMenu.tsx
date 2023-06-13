import React from "react";

interface ToggleMenuProps {
  onApplyFilter?: (item: string) => void;
}

const toggleItems = [
  "All Documents",
  "Expired Documents",
  "Expiring Documents",
];

const ToggleMenu: React.FC<ToggleMenuProps> = ({ onApplyFilter }) => {
  return (
    <div className="absolute rounded-[2px] flex flex-col justify-center m-auto border-[1px] border-secondary-50 dark:border-none shadow-custom w-[134px] h-[104px] bg-white text-black right-5 top-11 dark:bg-[#2F3640] dark:text-white">
      <div className="flex flex-col justify-around text-left cursor-pointer">
        {toggleItems.map((item, index: number) => {
          const handleClick = () => {
            if (onApplyFilter) {
              onApplyFilter(item);
            }
          };

          return (
            <p
              onClick={handleClick}
              key={index}
              className="px-2 py-1 hover:text-primary-80 hover:bg-primary-60 dark:hover:bg-[#525967] dark:hover:text-[#6EABFF] dark:text-[#FFFFFF] transition font-normal text-[12px]"
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ToggleMenu;
