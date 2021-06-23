import * as React from 'react';

function SvgModules(props) {
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
        d="M6 3a3 3 0 100 6 3 3 0 000-6zm12 0a3 3 0 100 6 3 3 0 000-6zM3 18a3 3 0 116 0 3 3 0 01-6 0zm15-3a3 3 0 100 6 3 3 0 000-6z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M2.25 6a3.75 3.75 0 017.425-.75H12a.75.75 0 010 1.5H9.675A3.751 3.751 0 012.25 6zM6 3.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM6.75 12a.75.75 0 00-1.5 0v2.325A3.751 3.751 0 006 21.75a3.75 3.75 0 00.75-7.425V12zm12-2.325A3.751 3.751 0 0018 2.25a3.75 3.75 0 00-.75 7.425V12a.75.75 0 001.5 0V9.675zM18 8.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 9a.75.75 0 000 1.5h2.325A3.751 3.751 0 0021.75 18a3.75 3.75 0 00-7.425-.75H12zm3.75.75a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM6 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgModules;