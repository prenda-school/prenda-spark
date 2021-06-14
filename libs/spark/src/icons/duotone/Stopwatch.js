import * as React from 'react';

function SvgStopwatch(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <circle cx={12} cy={13} r={9} fill={props.fillColor || '#F0F1F2'} />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M10 .25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4zm2 4.5a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zM2.25 13A9.75 9.75 0 0112 3.25c2.422 0 4.639.884 6.344 2.346L19.97 3.97a.75.75 0 111.06 1.06l-1.626 1.626A9.714 9.714 0 0121.75 13c0 5.385-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13zM12 9.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0v-4a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgStopwatch;
