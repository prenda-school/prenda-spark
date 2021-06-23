import * as React from 'react';

function SvgSunset(props) {
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
        d="M12 1.25a.75.75 0 01.75.75v5.19l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V2a.75.75 0 01.75-.75zm4 16.5H2a.75.75 0 010-1.5h5.309a4.751 4.751 0 019.382 0H22a.75.75 0 010 1.5h-6zm-10 2.5a.75.75 0 000 1.5h12a.75.75 0 000-1.5H6zM4.399 9.399a.75.75 0 011.06 0l2.122 2.12a.75.75 0 01-1.061 1.062l-2.121-2.122a.75.75 0 010-1.06zm12.02 2.12a.75.75 0 001.061 1.062l2.121-2.122a.75.75 0 10-1.06-1.06l-2.122 2.12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSunset;