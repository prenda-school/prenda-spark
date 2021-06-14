import * as React from 'react';

function SvgAlertCircle(props) {
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
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 7.25a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0V8a.75.75 0 01.75-.75zM12 17a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgAlertCircle;
