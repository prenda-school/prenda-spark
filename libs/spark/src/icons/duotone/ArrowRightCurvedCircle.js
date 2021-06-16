import * as React from 'react';

function SvgArrowRightCurvedCircle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <circle cx={12} cy={12} r={10} fill={props.fillColor || '#F0F1F2'} />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M2.75 12a9.25 9.25 0 1118.5 0 9.25 9.25 0 01-18.5 0zM12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zm2.53 6.22a.75.75 0 10-1.06 1.06l.72.72H11a3.75 3.75 0 100 7.5h2a.75.75 0 000-1.5h-2a2.25 2.25 0 010-4.5h5a.75.75 0 00.53-1.28l-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowRightCurvedCircle;
