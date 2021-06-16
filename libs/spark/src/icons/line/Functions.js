import * as React from 'react';

function SvgFunctions(props) {
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
        d="M5.31 3.707A.75.75 0 016 3.25h12a.75.75 0 110 1.5H7.767l6.5 6.729a.75.75 0 010 1.042l-6.5 6.729H18a.75.75 0 110 1.5H6a.75.75 0 01-.54-1.271L12.686 12 5.46 4.521a.75.75 0 01-.151-.814z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFunctions;
