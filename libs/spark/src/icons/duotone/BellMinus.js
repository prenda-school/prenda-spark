import * as React from 'react';

function SvgBellMinus(props) {
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
        d="M5.256 8.954a6.797 6.797 0 0113.488 0l.99 7.911A1.9 1.9 0 0117.847 19H6.152a1.9 1.9 0 01-1.885-2.135l.989-7.911z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M4.512 8.86a7.547 7.547 0 0114.976 0l.99 7.912a2.65 2.65 0 01-2.63 2.978h-1.36l-.053.118a4.853 4.853 0 01-8.87 0l-.052-.118H6.152a2.65 2.65 0 01-2.63-2.978l.99-7.911zm3.504 9.39a.93.93 0 00-.033 0H6.152a1.15 1.15 0 01-1.14-1.292L6 9.047a6.047 6.047 0 0112 0l.989 7.911a1.15 1.15 0 01-1.14 1.292h-1.832a.93.93 0 00-.033 0H8.016zm1.19 1.5a3.354 3.354 0 005.589 0h-5.59zM8.25 12a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBellMinus;