import * as React from 'react';

function SvgClipboardCross(props) {
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
        d="M16.97 2.378c-.367-.099-.78-.121-1.323-.127A2.751 2.751 0 0013 .25h-2c-1.26 0-2.32.846-2.647 2.001-.542.006-.956.028-1.324.127a3.75 3.75 0 00-2.651 2.651c-.129.48-.128 1.037-.128 1.855v8.171c0 1.367 0 2.47.116 3.337.122.9.38 1.658.982 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h2.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.601-.602.86-1.36.981-2.26.117-.867.117-1.97.117-3.337V6.884c0-.818 0-1.376-.128-1.855a3.75 3.75 0 00-2.651-2.651zM11 1.75a1.25 1.25 0 100 2.5h2a1.25 1.25 0 000-2.5h-2zM9.47 9.47a.75.75 0 011.06 0L12 10.94l1.47-1.47a.75.75 0 111.06 1.06L13.06 12l1.47 1.47a.75.75 0 11-1.06 1.06L12 13.06l-1.47 1.47a.75.75 0 11-1.06-1.06L10.94 12l-1.47-1.47a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgClipboardCross;
