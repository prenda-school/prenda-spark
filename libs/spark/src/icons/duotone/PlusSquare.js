import * as React from 'react';

function SvgPlusSquare(props) {
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
        fillRule="evenodd"
        d="M11 2.25h-.056c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H11zM4.702 4.702c.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h2c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289v2c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14h-2c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.027-.14-2.382-.14-4.289v-2c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008zM12.75 8a.75.75 0 00-1.5 0v3.25H8a.75.75 0 000 1.5h3.25V16a.75.75 0 001.5 0v-3.25H16a.75.75 0 000-1.5h-3.25V8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlusSquare;
