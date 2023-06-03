import React from "react";

type GeoAltFillProps = {
  color?: string;
  size?: string;
};

const GeoAltFill: React.FC<GeoAltFillProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : "16"}
      height={props.size ? props.size : "16"}
      fill={props.color ? props.color : "currentColor"}
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
};

export default GeoAltFill;
