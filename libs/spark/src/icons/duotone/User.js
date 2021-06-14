import * as React from 'react';

function SvgUser(props) {
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
        d="M12 11a4 4 0 100-8 4 4 0 000 8zm-7 8a4 4 0 014-4h6a4 4 0 014 4 2 2 0 01-2 2H7a2 2 0 01-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M8.75 7a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM12 2.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM5.75 19A3.25 3.25 0 019 15.75h6A3.25 3.25 0 0118.25 19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25zM9 14.25A4.75 4.75 0 004.25 19 2.75 2.75 0 007 21.75h10A2.75 2.75 0 0019.75 19 4.75 4.75 0 0015 14.25H9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgUser;
