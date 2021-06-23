import * as React from 'react';

function SvgMiniplayer(props) {
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
        d="M10 2.25h-.056c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H10zM10 14c0-.932 0-1.398.152-1.765a2 2 0 011.083-1.083C11.602 11 12.068 11 13 11h2c.932 0 1.398 0 1.765.152a2 2 0 011.083 1.083C18 12.602 18 13.068 18 14c0 .932 0 1.398-.152 1.765a2 2 0 01-1.083 1.083C16.398 17 15.932 17 15 17h-2c-.932 0-1.398 0-1.765-.152a2 2 0 01-1.083-1.083C10 15.398 10 14.932 10 14z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMiniplayer;