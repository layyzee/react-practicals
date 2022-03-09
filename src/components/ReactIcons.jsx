import React from "react";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { BsBadgeHdFill } from "react-icons/bs";
import { GoThumbsup } from "react-icons/go";

const ReactIcons = () => {
  return (
    <div>
      <h1>React icons</h1>
      <IconContext.Provider
        value={{
          color: "purple",
          size: "5rem",
        }}
      >
        <FaReact />
        <MdAlarm size={"10rem"} color="green" />
        <BsBadgeHdFill />
        <GoThumbsup
          style={{
            marginLeft: "2rem",
          }}
        />
      </IconContext.Provider>
    </div>
  );
};

export default ReactIcons;
