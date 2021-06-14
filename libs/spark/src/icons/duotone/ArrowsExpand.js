import * as React from 'react';

function SvgArrowsExpand(props) {
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
        d="M16 3.25a.75.75 0 000 1.5h2.19l-2.72 2.72-2 2a.75.75 0 101.06 1.06l2-2 2.72-2.72V8a.75.75 0 001.5 0V4a.75.75 0 00-.75-.75h-4zm-5.47 11.28a.75.75 0 10-1.06-1.06l-2 2-2.72 2.72V16a.75.75 0 00-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 000-1.5H5.81l2.72-2.72 2-2zM4 3.25a.75.75 0 00-.75.75v4a.75.75 0 001.5 0V5.81l2.72 2.72 2 2a.75.75 0 101.06-1.06l-2-2-2.72-2.72H8a.75.75 0 000-1.5H4zm10.53 10.22a.75.75 0 10-1.06 1.06l2 2 2.72 2.72H16a.75.75 0 000 1.5h4a.75.75 0 00.75-.75v-4a.75.75 0 00-1.5 0v2.19l-2.72-2.72-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArrowsExpand;
