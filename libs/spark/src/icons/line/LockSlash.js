import * as React from 'react';

function SvgLockSlash(props) {
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
        d="M11.5 1.25h-.073c-.393 0-.696 0-.963.053a2.75 2.75 0 00-2.161 2.16c-.053.268-.053.571-.053.964V5a.75.75 0 001.5 0v-.5c0-.5.004-.641.024-.744a1.25 1.25 0 01.982-.982c.103-.02.243-.024.744-.024h.5c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043v2.582A7.75 7.75 0 0012 7.25a.75.75 0 000 1.5A6.25 6.25 0 0118.25 15a.75.75 0 001.5 0 7.748 7.748 0 00-4-6.784V4.975c0-.445 0-.816-.02-1.12a2.822 2.822 0 00-.19-.907 2.75 2.75 0 00-1.488-1.489c-.29-.12-.59-.167-.907-.188-.304-.021-.675-.021-1.12-.021H11.5zM3.53 2.47a.75.75 0 00-1.06 1.06l5.106 5.106a7.75 7.75 0 1010.788 10.788l3.106 3.106a.75.75 0 101.06-1.06l-3.782-3.782-9.436-9.436L3.53 2.47zM5.75 15a6.245 6.245 0 012.907-5.282l8.625 8.625A6.25 6.25 0 015.75 15z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgLockSlash;
