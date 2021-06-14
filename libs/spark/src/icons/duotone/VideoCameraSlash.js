import * as React from 'react';

function SvgVideoCameraSlash(props) {
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
        fill={props.fillColor || '#F0F1F2'}
        d="M10 20h6a2 2 0 002-2L4 4c-.816.816-1.224 1.224-1.495 1.712a4 4 0 00-.352.848C2 7.098 2 7.675 2 8.828V12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M2.53 1.47a.75.75 0 00-1.06 1.06l1.47 1.471c-.492.502-.838.893-1.09 1.346a4.75 4.75 0 00-.418 1.008c-.182.64-.182 1.315-.182 2.363v3.338c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.432.153H16c1 0 1.876-.534 2.357-1.332l3.113 3.112a.75.75 0 101.06-1.06l-4-4-14-14-2-2zm.63 4.607c.158-.285.378-.54.842-1.014l13.217 13.216A1.25 1.25 0 0116 19.25h-6c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.028-.14-2.382-.14-4.289V8.828c0-1.196.007-1.649.124-2.062a3.25 3.25 0 01.286-.69zM10 4.75c1.907 0 3.261.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289v1a.75.75 0 001.5 0v-1.056c0-.95 0-1.798-.021-2.553L19.25 9c.718-.539 1.19-.89 1.548-1.085.17-.092.264-.12.31-.13.02.042.053.135.08.326.06.403.062.99.062 1.889v7a.75.75 0 001.5 0V9.94c0-.821 0-1.521-.077-2.047-.078-.533-.271-1.149-.89-1.458-.62-.31-1.228-.095-1.701.162-.416.227-.906.585-1.473 1.009a11.635 11.635 0 00-.012-.095c-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H9a.75.75 0 000 1.5h1zm11.142 3.034s-.005.001-.013-.001c.01 0 .014 0 .013.001zm-.046-.017l-.009-.01c0-.001.004.002.01.01z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgVideoCameraSlash;
