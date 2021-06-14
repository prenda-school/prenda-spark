import * as React from 'react';

function SvgCalendarPlus(props) {
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
        d="M8.75 1a.75.75 0 10-1.5 0v1.26c-.72.018-1.271.073-1.76.236A4.75 4.75 0 002.496 5.49c-.247.737-.246 1.618-.246 3v4.566c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-.233-.031-.48-.056-.739-.076V1a.75.75 0 00-1.5 0v1.263c-.662-.013-1.391-.013-2.194-.013H8.75V1zM12 7.25a.75.75 0 01.75.75v3.25H16a.75.75 0 010 1.5h-3.25V16a.75.75 0 01-1.5 0v-3.25H8a.75.75 0 010-1.5h3.25V8a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCalendarPlus;
