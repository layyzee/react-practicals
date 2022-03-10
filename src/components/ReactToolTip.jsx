import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
  return (
    <span
      style={{
        color: "yellow",
      }}
    >
      Colored component
    </span>
  );
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  );
});

const ReactToolTip = () => {
  return (
    <>
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy
          arrow={false}
          delay="1000"
          placement="left"
          content={"Basic Tooltip"}
        >
          <button>Hover</button>
        </Tippy>
      </div>

      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy
          placement="right"
          content={
            <span
              style={{
                color: "orange",
              }}
            >
              colored Tooltip
            </span>
          }
        >
          <button>Hover</button>
        </Tippy>
      </div>

      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy placement="bottom" content={<ColoredTooltip />}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy placement="bottom-end" content={<ColoredTooltip />}>
          <CustomChild />
        </Tippy>
      </div>
    </>
  );
};

export default ReactToolTip;
