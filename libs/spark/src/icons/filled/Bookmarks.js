import * as React from 'react';

function SvgBookmarks(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M14 1.75c.953 0 1.356.002 1.685.045a5.25 5.25 0 014.52 4.52c.043.329.045.732.045 1.685v11a.75.75 0 001.5 0V7.93c0-.862 0-1.372-.058-1.811a6.75 6.75 0 00-5.81-5.811C15.441.25 14.931.25 14.07.25H11a4.751 4.751 0 00-4.678 3.924c-.617.125-1.077.338-1.443.705C4 5.757 4 7.172 4 10v8.554c0 1.532 0 2.299.498 2.588.498.289 1.164-.091 2.494-.852l2.023-1.156c.97-.554 1.454-.83 1.985-.83.531 0 1.016.276 1.985.83l2.023 1.156c1.33.76 1.996 1.14 2.494.852.498-.29.498-1.056.498-2.588V10c0-2.828 0-4.243-.879-5.121C16.243 4 14.828 4 12 4h-2c-.809 0-1.502 0-2.1.02A3.251 3.251 0 0111 1.75h3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBookmarks;
