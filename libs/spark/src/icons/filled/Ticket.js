import * as React from 'react';

function SvgTicket(props) {
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
        d="M4.5 4.25h-.073c-.393 0-.696 0-.964.053a2.75 2.75 0 00-2.16 2.16c-.053.268-.053.571-.053.964v2.397c0 .511.415.926.926.926H3a1.25 1.25 0 110 2.5h-.824a.926.926 0 00-.926.927v2.396c0 .393 0 .696.053.963a2.75 2.75 0 002.16 2.161c.268.053.571.053.964.053h15.146c.393 0 .696 0 .963-.053a2.75 2.75 0 002.161-2.16c.053-.268.053-.571.053-.964v-2.396a.926.926 0 00-.927-.927H21a1.25 1.25 0 010-2.5h.823a.926.926 0 00.927-.926V7.427c0-.393 0-.696-.053-.964a2.75 2.75 0 00-2.16-2.16c-.268-.053-.571-.053-.964-.053H4.5zm3.75 14h1.5V16a.75.75 0 00-1.5 0v2.25zm1.5-12.5h-1.5V8a.75.75 0 101.5 0V5.75zM9 10.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTicket;
