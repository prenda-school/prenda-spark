import * as React from 'react';

function SvgNote2Text(props) {
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
        d="M8.75 1a.75.75 0 00-1.5 0v1.327c-.26.02-.506.045-.739.076-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-.233-.031-.48-.056-.739-.076V1a.75.75 0 00-1.5 0v1.263c-.662-.013-1.391-.013-2.194-.013h-.306V1a.75.75 0 00-1.5 0v1.25h-.306c-.803 0-1.532 0-2.194.013V1zM7 8.25a.75.75 0 000 1.5h10a.75.75 0 000-1.5H7zM6.25 13a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75zM7 16.25a.75.75 0 000 1.5h2a.75.75 0 000-1.5H7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgNote2Text;
