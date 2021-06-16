import * as React from 'react';

function SvgUndo(props) {
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
        d="M7.53 2.47a.75.75 0 010 1.06L4.81 6.25H15a6.75 6.75 0 010 13.5h-4a.75.75 0 010-1.5h4a5.25 5.25 0 100-10.5H4.81l2.72 2.72a.75.75 0 11-1.06 1.06l-4-4a.75.75 0 010-1.06l4-4a.75.75 0 011.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUndo;
