import * as React from 'react';

function SvgImagePlus(props) {
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
        d="M10.944 2.25H12a.75.75 0 010 1.5h-1c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289v2c0 1.582.001 2.783.08 3.734l2.846-2.627c1.336-1.233 2.004-1.85 2.809-1.834.805.017 1.447.66 2.732 1.944L14 16l.354-.354c1.254-1.254 1.881-1.881 2.67-1.908.79-.026 1.457.558 2.792 1.726l.405.355c.029-.782.029-1.706.029-2.819v-1a.75.75 0 011.5 0v1.056c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153zM18.75 3a.75.75 0 00-1.5 0v2.25H15a.75.75 0 000 1.5h2.25V9a.75.75 0 001.5 0V6.75H21a.75.75 0 000-1.5h-2.25V3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgImagePlus;
