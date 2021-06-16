import * as React from 'react';

function SvgEmails(props) {
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
        d="M4 9c0-2.828 0-4.243.879-5.121C5.757 3 7.172 3 10 3h6c2.828 0 4.243 0 5.121.879C22 4.757 22 6.172 22 9v2c0 2.828 0 4.243-.879 5.121-.357.357-.802.57-1.395.695a10.4 10.4 0 01-.03.442c-.054.606-.17 1.136-.448 1.617a3.75 3.75 0 01-1.373 1.373c-.481.277-1.011.394-1.617.449-.589.053-1.318.053-2.222.053h-1.094c-2.78 0-4.942 0-6.626-.226-1.717-.231-3.048-.71-4.089-1.751-1.041-1.041-1.52-2.372-1.75-4.09C.25 13 .25 10.838.25 8.059V6a.75.75 0 011.5 0v2c0 2.85.002 4.911.213 6.484.208 1.55.609 2.512 1.325 3.228.716.716 1.678 1.116 3.228 1.325 1.573.211 3.634.213 6.484.213h1c.948 0 1.61 0 2.122-.047.503-.046.788-.13 1.003-.254a2.26 2.26 0 00.824-.824c.124-.215.208-.5.254-1.003l.012-.147C17.59 17 16.86 17 16 17h-6c-2.828 0-4.243 0-5.121-.879C4 15.243 4 13.828 4 11V9zm3.357-2.386a.75.75 0 011.029-.257L13 9.125l4.614-2.768a.75.75 0 01.772 1.286l-5 3a.75.75 0 01-.772 0l-5-3a.75.75 0 01-.257-1.029z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEmails;
