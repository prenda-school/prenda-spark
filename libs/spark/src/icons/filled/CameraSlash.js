import * as React from 'react';

function SvgCameraSlash(props) {
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
        d="M1.47 1.47a.75.75 0 011.06 0l2.78 2.78a4.2 4.2 0 00.288-.007.593.593 0 00.082-.012h.003a6.385 6.385 0 00.373-.346l.292-.294.09-.09c.85-.85 1.398-1.398 2.08-1.742a4.75 4.75 0 01.652-.27c.726-.24 1.502-.24 2.704-.239h.253c1.201 0 1.977 0 2.703.239.224.073.441.164.652.27.682.344 1.23.892 2.08 1.743l.09.089.613.613c.03.03.069.046.11.046a4.375 4.375 0 014.375 4.375V20c0 .468-.184.893-.483 1.207l.263.263a.75.75 0 01-1.06 1.06l-1-1-6-6-2-2-8-8-3-3a.75.75 0 010-1.06zm13.839 12.779a4 4 0 00-5.557-5.557l3.778 3.778 1.779 1.778zM2 5.25a.75.75 0 01.75.75v7c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h7a.75.75 0 010 1.5H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V6A.75.75 0 012 5.25zm6 6a.75.75 0 01.75.75A3.25 3.25 0 0012 15.25a.75.75 0 010 1.5A4.75 4.75 0 017.25 12a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCameraSlash;
