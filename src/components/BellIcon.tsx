import React from "react";

type Props = {
  className?: string;
};

export default function BellIcon({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      role="img"
      aria-labelledby="notificationTitle"
      className={`inline-block ${className}`}
    >
      <title id="notificationTitle">Notifications</title>
      
      {/* Bell Outline */}
      <path
        d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
        fill="transparent"
        stroke="white"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300 ease-in-out group-hover:fill-white group-hover:stroke-transparent"
      />
      
      {/* Bell Clapper */}
      <path
        d="M13.73 21a2 2 0 0 1-3.46 0"
        fill="transparent"
        stroke="white"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300 ease-in-out group-hover:fill-white group-hover:stroke-transparent"
      />
    </svg>
  );
}
