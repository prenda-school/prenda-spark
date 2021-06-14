import * as React from 'react';

function SvgChevronsLeft(props) {
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
        d="M12.53 6.53a.75.75 0 00-1.06-1.06l-6 6a.75.75 0 000 1.06l6 6a.75.75 0 101.06-1.06L7.06 12l5.47-5.47zm4 2a.75.75 0 00-1.06-1.06l-4 4a.75.75 0 000 1.06l4 4a.75.75 0 101.06-1.06L13.06 12l3.47-3.47z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgChevronsLeft;
