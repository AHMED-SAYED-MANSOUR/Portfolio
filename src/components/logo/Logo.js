import React from "react";
import AhmedMark from "./AhmedMark";
import "./Logo.css";

const Logo = ({ className = "", style = {}, animated = false, variant }) => {
  return (
    <div className={`logo-container ${className}`.trim()} style={style}>
      <AhmedMark animated={animated} variant={variant} />
    </div>
  );
};

export default Logo;

