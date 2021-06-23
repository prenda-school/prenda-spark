import * as React from 'react';

function SvgVideoCamera(props) {
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
        d="M10 3.25h-.056c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87l.012-.095c.567.424 1.057.783 1.473 1.009.473.257 1.081.472 1.7.162.62-.31.813-.925.891-1.458.077-.526.077-1.225.077-2.047V9.94c0-.821 0-1.521-.077-2.047-.078-.533-.271-1.149-.89-1.458-.62-.31-1.228-.095-1.701.162-.416.227-.906.585-1.473 1.009a11.695 11.695 0 00-.012-.095c-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H10zm8.75 8.599V10c0-.258 0-.404.01-.512a.613.613 0 01.016-.098v-.002l.001-.001.007-.009a.594.594 0 01.062-.062c.081-.073.197-.161.404-.316.718-.539 1.19-.89 1.548-1.085.17-.092.264-.12.31-.13.02.042.053.135.08.326.06.403.062.99.062 1.889v4c0 .898-.002 1.486-.061 1.89-.028.19-.061.283-.082.324a1.144 1.144 0 01-.309-.13c-.358-.194-.83-.545-1.548-1.084a6.617 6.617 0 01-.404-.316.589.589 0 01-.067-.068c0-.002-.002-.002-.002-.003v-.001l-.001-.002a6.582 6.582 0 01-.026-.61v-1.848M17.25 12c0 1.907-.002 3.261-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.028-.14-2.382-.14-4.289 0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14 1.907 0 3.261.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289zm3.892-4.216s-.005.001-.013-.001c.01 0 .014 0 .013.001zm-.046-.017l-.009-.01c0-.001.004.002.01.01zm-.009 8.476s.003-.005.01-.01c-.006.008-.01.011-.01.01zm.042-.026c.008-.002.013-.002.013-.001 0 0-.003.002-.013.001z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgVideoCamera;