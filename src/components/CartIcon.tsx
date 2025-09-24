import React from "react";

type Props = {
  className?: string;
};

export default function CartIcon({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-labelledby="cartOutlineTitle"
      role="img"
      className={`group inline-block ${className}`}
    >
      <title id="cartOutlineTitle">Shopping cart</title>

      {/* Cart Outline */}
      <path
        d="M3 3h2l1.6 9.6a2 2 0 0 0 2 1.6h8.8a1 1 0 0 0 .97-.76L21 6H6"
        fill="transparent"
        stroke="white"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300 ease-in-out group-hover:fill-white group-hover:stroke-transparent"
      />

      {/* Wheels */}
      <circle
        cx="9"
        cy="20"
        r="1.4"
        fill="transparent"
        stroke="white"
        strokeWidth={1.6}
        className="transition-colors duration-300 ease-in-out group-hover:fill-white group-hover:stroke-transparent"
      />
      <circle
        cx="18"
        cy="20"
        r="1.4"
        fill="transparent"
        stroke="white"
        strokeWidth={1.6}
        className="transition-colors duration-300 ease-in-out group-hover:fill-white group-hover:stroke-transparent"
      />
    </svg>
  );
}
