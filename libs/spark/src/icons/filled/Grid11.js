import * as React from 'react';

function SvgGrid11(props) {
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
        d="M2.879 2.879C2 3.757 2 5.172 2 8v.25h20V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879zM2 14.75v-5h9.25v5H2zm0 1.5c0 2.663.026 4.019.879 4.871C3.757 22 5.172 22 8 22h3.25v-5.75H2zm10.75 0V22H16c2.828 0 4.243 0 5.121-.879.853-.852.878-2.208.879-4.871h-9.25zm9.25-1.5v-5h-9.25v5H22z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGrid11;