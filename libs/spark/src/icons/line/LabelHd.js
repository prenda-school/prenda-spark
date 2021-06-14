import * as React from 'react';

function SvgLabelHd(props) {
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
        d="M9.944 2.25h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153zM5.71 3.89c-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.028-.14 2.382-.14 4.289v2c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14zM7 8.25a.75.75 0 01.75.75v2.25h2.5V9a.75.75 0 011.5 0v6a.75.75 0 01-1.5 0v-2.25h-2.5V15a.75.75 0 01-1.5 0V9A.75.75 0 017 8.25zm7.5 1.5c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 01-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017h-.25v-4.5h.25zm2.052-1.29a2.814 2.814 0 00-.907-.19c-.304-.02-.675-.02-1.12-.02H13.5a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h1.025c.445 0 .816 0 1.12-.02.318-.022.617-.069.907-.19a2.75 2.75 0 001.489-1.488c.12-.29.167-.59.188-.907.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.821 2.821 0 00-.19-.907 2.75 2.75 0 00-1.488-1.489z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgLabelHd;
