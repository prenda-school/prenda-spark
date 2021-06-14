import * as React from 'react';

function SvgCalendarNote(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <rect
        width={18}
        height={18}
        x={3}
        y={3}
        fill={props.fillColor || '#F0F1F2'}
        rx={4}
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M8.75 1a.75.75 0 00-1.5 0v1.273c-.187.008-.364.018-.53.03-.694.056-1.282.171-1.82.437A4.75 4.75 0 002.74 4.9c-.266.538-.38 1.126-.436 1.82-.054.679-.054 1.52-.054 2.581v3.755c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-.233-.031-.48-.056-.739-.076V1a.75.75 0 00-1.5 0v1.263c-.662-.013-1.391-.013-2.194-.013H8.75V1zm6.5 3v-.237c-.653-.013-1.396-.013-2.25-.013H8.75V4a.75.75 0 01-1.5 0v-.226c-.146.007-.282.015-.411.025-.604.048-.979.14-1.276.286a3.25 3.25 0 00-1.478 1.478c-.147.297-.238.672-.286 1.276-.048.612-.049 1.394-.049 2.494V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-.17-.023-.35-.042-.539-.058V4a.75.75 0 01-1.5 0zM7 7.25a.75.75 0 000 1.5h10a.75.75 0 000-1.5H7zM6.25 12a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75zM7 15.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5H7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCalendarNote;
