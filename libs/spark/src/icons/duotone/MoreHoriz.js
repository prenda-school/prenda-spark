import * as React from 'react';

function SvgMoreHoriz(props) {
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
        fillRule="evenodd"
        d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-9 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M2.25 12A2.756 2.756 0 015 9.25 2.756 2.756 0 017.75 12 2.756 2.756 0 015 14.75 2.756 2.756 0 012.25 12zM5 10.75c-.686 0-1.25.564-1.25 1.25s.564 1.25 1.25 1.25 1.25-.564 1.25-1.25-.564-1.25-1.25-1.25zM16.25 12A2.756 2.756 0 0119 9.25 2.756 2.756 0 0121.75 12 2.756 2.756 0 0119 14.75 2.756 2.756 0 0116.25 12zM19 10.75c-.686 0-1.25.564-1.25 1.25s.564 1.25 1.25 1.25 1.25-.564 1.25-1.25-.564-1.25-1.25-1.25zM9.25 12A2.756 2.756 0 0112 9.25 2.756 2.756 0 0114.75 12 2.756 2.756 0 0112 14.75 2.756 2.756 0 019.25 12zM12 10.75c-.686 0-1.25.564-1.25 1.25s.564 1.25 1.25 1.25 1.25-.564 1.25-1.25-.564-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMoreHoriz;
