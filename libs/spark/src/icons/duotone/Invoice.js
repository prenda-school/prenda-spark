import * as React from 'react';

function SvgInvoice(props) {
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
        d="M3 3v12c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h8V3l-3.5 2L10 3 6.5 5 3 3z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M2.624 2.351a.75.75 0 00-.274.275l.274-.275zm0 0a.75.75 0 01.748-.002L6.5 4.136 9.628 2.35a.75.75 0 01.744 0L13.5 4.136l3.128-1.787A.75.75 0 0117.75 3v8.25H21a.75.75 0 01.75.75v7A2.75 2.75 0 0119 21.75H8.945c-1.197 0-2.19 0-3-.078a9.046 9.046 0 01-.337-.038c-.787-.106-1.466-.318-2.027-.772a3.013 3.013 0 01-.233-.21c-.564-.565-.827-1.266-.957-2.093a12.1 12.1 0 01-.112-1.243 44.46 44.46 0 01-.029-1.827v-.307l.374-12.83zM16.25 12V4.292l-2.378 1.36a.75.75 0 01-.744 0L10 3.863 6.872 5.65a.75.75 0 01-.744 0L3.75 4.292V15c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h7.55c-.192-.375-.3-.8-.3-1.25v-7zM19 20.25c.69 0 1.25-.56 1.25-1.25v-6.25h-2.5V19c0 .69.56 1.25 1.25 1.25zm-8.25-11V9a.75.75 0 00-1.5 0v.264a2.25 2.25 0 00.25 4.486h1a.75.75 0 010 1.5H8a.75.75 0 000 1.5h1.25V17a.75.75 0 001.5 0v-.264a2.25 2.25 0 00-.25-4.486h-1a.75.75 0 010-1.5H12a.75.75 0 000-1.5h-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgInvoice;