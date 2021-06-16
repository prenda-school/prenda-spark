import * as React from 'react';

function SvgApperture(props) {
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
        d="M3.75 12c0-.89.14-1.746.401-2.548l2.239 2.984a.73.73 0 00.02.028L8.5 15.25H4.415A8.223 8.223 0 013.75 12zm10.241-4.75h4.755a8.254 8.254 0 00-5.118-3.34.735.735 0 01-.015.023L11.27 7.25h2.72zm3.599 4.286L15.5 8.75h4.085A8.22 8.22 0 0120.25 12c0 .89-.14 1.746-.401 2.549l-2.239-2.985a.698.698 0 00-.02-.028zm-5.685-7.785A8.247 8.247 0 004.85 7.883l2.133 2.843 4.923-6.975zm.663 16.48l4.477-6.92 2.106 2.806a8.25 8.25 0 01-6.583 4.114zm-1.698-.138a.743.743 0 00-.042.074 8.248 8.248 0 01-5.574-3.417h7.779l-2.163 3.343zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgApperture;
