import * as React from 'react';

function SvgClock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <circle cx={12} cy={12} r={9} fill={props.fillColor || '#F0F1F2'} />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M5.53 1.47a.75.75 0 010 1.06l-3 3a.75.75 0 01-1.06-1.06l3-3a.75.75 0 011.06 0zM3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 8a.75.75 0 00-1.5 0v4c0 .25.125.485.334.624l3 2a.75.75 0 10.832-1.248l-2.666-1.777V8zm5.72-5.47a.75.75 0 011.06-1.06l3 3a.75.75 0 01-1.06 1.06l-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgClock;
