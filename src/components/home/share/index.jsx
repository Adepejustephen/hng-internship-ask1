import React, { useState } from "react";
import { DesktopShareBtn, MobileShareBtn } from "../../../assets";
import "./share.css";

export const Share = () => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <div className="share">
      <div
        className={isClicked ? "share__icon--active" : "share__icon"}
        onClick={handleClick}
      >
        <MobileShareBtn className="icon" />
        <DesktopShareBtn className="icon" />
        <div className="tooltip__container">
          <div className="share__tooltip">Share link</div>
        </div>
      </div>
    </div>
  );
};
