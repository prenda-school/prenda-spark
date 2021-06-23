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
        fill="currentcolor"
        fillRule="evenodd"
        d="M2.624 2.351a.75.75 0 01.748-.002L6.5 4.136 9.628 2.35a.75.75 0 01.744 0L13.5 4.136l3.128-1.787A.75.75 0 0117.75 3v8.25H21a.75.75 0 01.75.75v7A2.75 2.75 0 0119 21.75H8.945c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337V3a.75.75 0 01.374-.649zM20.25 19a1.25 1.25 0 11-2.5 0v-6.25h2.5V19zm-9.5-10v.25H12a.75.75 0 010 1.5H9.5a.75.75 0 000 1.5h1a2.25 2.25 0 01.25 4.486V17a.75.75 0 01-1.5 0v-.25H8a.75.75 0 010-1.5h2.5a.75.75 0 000-1.5h-1a2.25 2.25 0 01-.25-4.486V9a.75.75 0 011.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgInvoice;