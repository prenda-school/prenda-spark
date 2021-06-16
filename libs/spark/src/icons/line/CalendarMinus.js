import * as React from 'react';

function SvgCalendarMinus(props) {
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
        d="M8.75 1a.75.75 0 10-1.5 0v1.26c-.72.018-1.271.073-1.76.236A4.75 4.75 0 002.497 5.49c-.247.737-.246 1.618-.246 3v4.566c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238a12.96 12.96 0 00-.739-.076V1a.75.75 0 00-1.5 0v1.263c-.662-.013-1.391-.013-2.194-.013H8.75V1zm6.5 3v-.237c-.653-.013-1.396-.013-2.25-.013H8.75V4a.75.75 0 11-1.5 0v-.24c-.626.017-.983.058-1.283.158a3.25 3.25 0 00-2.048 2.05c-.16.473-.169 1.086-.169 2.68V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-.17-.023-.35-.042-.539-.058V4a.75.75 0 01-1.5 0zM8 11.25a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCalendarMinus;
