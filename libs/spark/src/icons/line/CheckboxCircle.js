import * as React from 'react';

function SvgCheckboxCircle(props) {
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
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M3.75 12a8.25 8.25 0 0111.916-7.393.75.75 0 10.668-1.343A9.713 9.713 0 0012 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.75 9.75 0 009.69-10.832.75.75 0 10-1.49.164A8.25 8.25 0 113.75 12zm17.78-6.47a.75.75 0 00-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l9-9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCheckboxCircle;
