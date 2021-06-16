import * as React from 'react';

function SvgBellPlus(props) {
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
        d="M4.512 8.86a7.547 7.547 0 0114.976 0l.99 7.912a2.65 2.65 0 01-2.63 2.978h-1.36l-.053.118a4.853 4.853 0 01-8.87 0l-.052-.118H6.152a2.65 2.65 0 01-2.63-2.978l.99-7.911zm10.283 10.89h-5.59a3.354 3.354 0 005.59 0zM12 8.25a.75.75 0 01.75.75v2.25H15a.75.75 0 110 1.5h-2.25V15a.75.75 0 01-1.5 0v-2.25H9a.75.75 0 010-1.5h2.25V9a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBellPlus;
