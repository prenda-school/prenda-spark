import * as React from 'react';

function SvgCamera(props) {
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
        d="M12 1.25h-.127c-1.201 0-1.977 0-2.703.239a4.751 4.751 0 00-.652.27c-.682.344-1.23.892-2.08 1.743l-.09.089-.613.613a.156.156 0 01-.11.046A4.375 4.375 0 001.25 8.625v4.431c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433V8.625a4.375 4.375 0 00-4.375-4.375.156.156 0 01-.11-.046l-.613-.613-.09-.09c-.85-.85-1.398-1.398-2.08-1.742a4.755 4.755 0 00-.652-.27c-.726-.24-1.502-.24-2.704-.239H12zM16 12a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCamera;
