import * as React from 'react';

function SvgBorderBottom(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <path fill={props.fillColor || '#F0F1F2'} d="M4 4h16v16H4z" />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M20 5a1 1 0 100-2 1 1 0 000 2zm1 3a1 1 0 11-2 0 1 1 0 012 0zm-1 5a1 1 0 100-2 1 1 0 000 2zm1 3a1 1 0 11-2 0 1 1 0 012 0zM2.25 20a.75.75 0 01.75-.75h18a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM12 17a1 1 0 100-2 1 1 0 000 2zm-7-1a1 1 0 11-2 0 1 1 0 012 0zm12-4a1 1 0 11-2 0 1 1 0 012 0zm-5 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm-5 1a1 1 0 100-2 1 1 0 000 2zm8-4a1 1 0 100-2 1 1 0 000 2zM5 8a1 1 0 11-2 0 1 1 0 012 0zm12-4a1 1 0 11-2 0 1 1 0 012 0zm-5 1a1 1 0 100-2 1 1 0 000 2zM9 4a1 1 0 11-2 0 1 1 0 012 0zM4 5a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBorderBottom;
