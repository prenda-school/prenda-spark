import * as React from 'react';

function SvgFilmReel(props) {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-8a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM22.75 12c0 3.935-2.115 7.377-5.27 9.25H22a.75.75 0 010 1.5H12C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12zm-12 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM12 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM13 6a1 1 0 11-2 0 1 1 0 012 0zm-7 7a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zm-7 7a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFilmReel;
