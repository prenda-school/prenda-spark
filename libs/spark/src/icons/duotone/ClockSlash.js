import * as React from 'react';

function SvgClockSlash(props) {
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
        fill={props.fillColor || '#F0F1F2'}
        d="M3 12a9 9 0 0015.364 6.364L5.636 5.636A8.972 8.972 0 003 12z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M18.47 2.53a.75.75 0 011.06-1.06l3 3a.75.75 0 01-1.06 1.06l-3-3zM3.53 2.47a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 001.06 1.06L3 4.06l1.596 1.596A9.714 9.714 0 002.25 12 9.75 9.75 0 0012 21.75a9.714 9.714 0 006.344-2.346l2.126 2.126a.75.75 0 101.06-1.06l-2.636-2.636L6.166 5.106 3.53 2.47zM3.75 12a8.22 8.22 0 011.91-5.28l11.62 11.62A8.25 8.25 0 013.75 12zm4.584-7.393a8.25 8.25 0 0111.059 11.059.75.75 0 001.343.668A9.713 9.713 0 0021.75 12 9.75 9.75 0 0012 2.25a9.713 9.713 0 00-4.334 1.014.75.75 0 00.668 1.343z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgClockSlash;
