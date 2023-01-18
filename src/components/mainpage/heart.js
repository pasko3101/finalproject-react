import React from "react";

function HeartIcon({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="current"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.8931 3.87332C13.5526 3.53265 13.1483 3.26242 12.7033 3.07804C12.2584 2.89367 11.7814 2.79877 11.2998 2.79877C10.8181 2.79877 10.3412 2.89367 9.89618 3.07804C9.45121 3.26242 9.04692 3.53265 8.70642 3.87332L7.99975 4.57998L7.29309 3.87332C6.60529 3.18552 5.67244 2.79912 4.69975 2.79912C3.72706 2.79912 2.79422 3.18552 2.10642 3.87332C1.41863 4.56111 1.03223 5.49396 1.03223 6.46665C1.03223 7.43934 1.41863 8.37219 2.10642 9.05998L2.81309 9.76665L7.99975 14.9533L13.1864 9.76665L13.8931 9.05998C14.2337 8.71948 14.504 8.31519 14.6884 7.87022C14.8727 7.42525 14.9676 6.94831 14.9676 6.46665C14.9676 5.98499 14.8727 5.50805 14.6884 5.06308C14.504 4.61811 14.2337 4.21382 13.8931 3.87332V3.87332Z"
      />
    </svg>
  );
}
export default HeartIcon;
