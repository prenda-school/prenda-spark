import * as React from 'react';

function SvgActivity(props) {
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
        d="M10 2.25h-.056c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H10zm4 6a.75.75 0 01.624.334l1.777 2.666H18a.75.75 0 010 1.5h-2a.75.75 0 01-.624-.334L14 10.352l-3.376 5.064a.75.75 0 01-1.248 0L7.599 12.75H6a.75.75 0 010-1.5h2a.75.75 0 01.624.334L10 13.648l3.376-5.064A.75.75 0 0114 8.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgActivity;
