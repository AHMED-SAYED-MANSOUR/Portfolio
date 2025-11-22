import React from "react";

const AhmedMark = ({
  className = "",
  animated = false,
  variant = "default",
  ...rest
}) => {
  const classes = [
    "logo-svg",
    className,
    animated ? "logo-svg--animated" : "",
    variant ? `logo-svg--${variant}` : "",
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <svg
      viewBox="0 0 640 190"
      role="img"
      aria-label="Ahmed Mansour logo"
      className={classes}
      {...rest}
    >
      <title>Ahmed Mansour logo</title>
      <defs>
        <linearGradient
          id="ahmed-logo-green"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#8dd355" />
          <stop offset="100%" stopColor="#60b346" />
        </linearGradient>
        <linearGradient
          id="ahmed-logo-blue"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#33c3ff" />
          <stop offset="100%" stopColor="#1f7dd1" />
        </linearGradient>
        <linearGradient
          id="ahmed-logo-dark"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#2f3035" />
          <stop offset="100%" stopColor="#1b1c1f" />
        </linearGradient>
      </defs>

      <g transform="translate(0 8)">
        <path
          d="M86 0L22 38v76l64 38 64-38V38L86 0z"
          fill="url(#ahmed-logo-dark)"
        />
        <path
          d="M86 12l52 30-14 8-38-22-38 22-14-8z"
          fill="url(#ahmed-logo-green)"
        />
        <path
          d="M86 46l64 38v24l-64-38-64 38V84z"
          fill="url(#ahmed-logo-blue)"
        />
        <path
          d="M86 86l36 22v38l-36-21-36 21V108z"
          fill="#111114"
          opacity="0.85"
        />
      </g>

      <g transform="translate(180 20)">
        <text
          x="0"
          y="80"
          fill="#1f9cd7"
          fontFamily="'Montserrat','Google Sans','Segoe UI',sans-serif"
          fontSize="72"
          fontWeight="700"
          letterSpacing="6"
        >
          AHMED
        </text>
        <text
          x="0"
          y="138"
          fill="#2f3035"
          fontFamily="'Montserrat','Google Sans','Segoe UI',sans-serif"
          fontSize="58"
          fontWeight="600"
          letterSpacing="8"
        >
          MANSOUR
        </text>
      </g>
    </svg>
  );
};

export default AhmedMark;


