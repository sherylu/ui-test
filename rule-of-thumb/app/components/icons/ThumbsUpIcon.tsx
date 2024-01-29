import React from "react";

const ThumbsUpIcon: React.FC<{ ariaLabel?: string; size?: number }> = ({
  ariaLabel = "thumbs up",
  size = 25,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      role="img" 
      aria-label={ariaLabel}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.59333 11.1611C8.49999 7.11295 9.53128 5.95912 9.35917 3.61581C9.18706 1.2725 9.67939 0.62817 10.8506 0.512787C12.0217 0.397404 14.2207 1.00154 14.6068 4.83706C14.7734 6.4965 13.5206 9.76352 13.5206 9.76352L22.2866 9.76806C23.5277 9.76806 24.5 10.2704 24.5 11.8715C24.5 13.3715 22.7467 13.8227 22.7467 13.8227C23.4419 14.1187 23.8833 14.7783 23.8685 15.499C23.8727 16.5158 23.0077 17.3451 21.9321 17.3555C22.6678 17.635 23.0881 18.3707 22.9318 19.1057C22.7984 19.9865 22.0773 20.6844 21.149 20.8312C21.7569 21.2378 22.0083 21.9747 21.7661 22.6404C21.3725 23.5194 20.3337 24.4885 18.0003 24.4885L7.0998 24.4885C6.45106 24.5661 5.82155 24.2465 5.53162 23.6924L5.53162 11.6511C5.5271 11.4858 5.54789 11.3208 5.59333 11.1611ZM0.499998 10.3871L4.76433 10.3871L4.76433 24.4859L0.499996 24.4859L0.499998 10.3871Z"
        fill="white"
      />
    </svg>
  );
};

export default ThumbsUpIcon;