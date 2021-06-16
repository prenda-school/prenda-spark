import * as React from 'react';

function SvgExport3(props) {
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
        fillRule="evenodd"
        d="M3.75 12A8.25 8.25 0 0112 3.75a.75.75 0 000-1.5c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75a.75.75 0 00-1.5 0 8.25 8.25 0 01-16.5 0zm11.5-9c0 .414.336.75.75.75h3.19l-7.72 7.72a.75.75 0 101.06 1.06l7.72-7.72V8a.75.75 0 001.5 0V3a.75.75 0 00-.75-.75h-5a.75.75 0 00-.75.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgExport3;
