import React from "react";
import AhmedMark from "../logo/AhmedMark";
import "../logo/Logo.css";
import "./LoaderLogo.css";

const LogoLoader = ({ theme, className = "", ...rest }) => {
  const accent = theme?.highlight || "rgba(33, 164, 217, 0.45)";

  return (
    <div
      className={`loader-logo ${className}`.trim()}
      style={{
        boxShadow: `0 20px 60px ${theme?.text ? `${theme.text}1a` : "#00000026"}`,
      }}
      {...rest}
    >
      <div
        className="loader-logo__glow"
        style={{ borderColor: accent }}
        aria-hidden="true"
      />
      <AhmedMark animated variant="loader" />
    </div>
  );
};

export default LogoLoader;


