import * as React from 'react';

function SvgRadio(props) {
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
        d="M9 2.75a2.25 2.25 0 00-2.136 1.54c.881-.04 1.902-.04 3.08-.04h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.702-.701 1.579-1.037 2.651-1.206A3.75 3.75 0 019 1.25h8a.75.75 0 010 1.5H9zm-1 8a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM5.25 12a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM14 9.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4zM13.25 14a.75.75 0 01.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgRadio;
