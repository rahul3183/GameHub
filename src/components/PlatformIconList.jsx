import React from "react";
import { IconBase } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

export const PlatformIconList = ({ platforms }) => {
  const IconMap = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    android: <FaAndroid />,
    mac: <FaApple />,
    linux: <FaLinux />,
    nintendo: <BsNintendoSwitch />,
    ios: <MdPhoneIphone />,
  };
  return (
    <>
      <div className="dark:text-gray-600 text-gray-900 flex">
        {platforms.map((platform, index) => (
          <div key={index} className="mr-2">
            {IconMap[platform.slug]}
          </div>
        ))}
      </div>
    </>
  );
};
