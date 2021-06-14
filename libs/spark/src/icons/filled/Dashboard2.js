import * as React from 'react';

function SvgDashboard2(props) {
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
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M4.95 6.011a9.21 9.21 0 00-2.17 5.239H4a.75.75 0 010 1.5H2.78a9.216 9.216 0 002.47 5.575 6.013 6.013 0 014-2.278V16a2.75 2.75 0 012-2.646V9a.75.75 0 011.5 0v4.354a2.751 2.751 0 012 2.693 6.013 6.013 0 014 2.278 9.216 9.216 0 002.47-5.575H20a.75.75 0 010-1.5h1.22a9.21 9.21 0 00-2.17-5.239l-.52.52a.75.75 0 11-1.06-1.061l.52-.52a9.21 9.21 0 00-5.24-2.17V4a.75.75 0 01-1.5 0V2.78a9.21 9.21 0 00-5.239 2.17l.52.52A.75.75 0 015.47 6.53l-.52-.519zM12 14.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75 22.75 17.937 22.75 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDashboard2;
