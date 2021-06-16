import * as React from 'react';

function SvgPin(props) {
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
        d="M4.75 10.148c0-2.517.92-4.348 2.253-5.555C8.35 3.374 10.163 2.75 12 2.75c1.836 0 3.65.624 4.997 1.843C18.33 5.8 19.25 7.631 19.25 10.148c0 3.274-1.965 6.136-3.982 8.197-.727.743-1.193 1.214-1.67 1.52-.431.276-.885.423-1.598.423-.712 0-1.166-.147-1.598-.424-.476-.305-.942-.776-1.67-1.519-2.017-2.061-3.982-4.923-3.982-8.197zm16 0c0-2.915-1.08-5.158-2.747-6.667C16.35 1.984 14.163 1.25 12 1.25c-2.164 0-4.35.734-6.003 2.231C4.33 4.99 3.25 7.233 3.25 10.148c0 3.866 2.3 7.09 4.41 9.246l.047.048c.667.682 1.25 1.277 1.886 1.685.697.447 1.437.661 2.407.661s1.711-.214 2.408-.66c.636-.409 1.218-1.004 1.886-1.686l.046-.048c2.11-2.156 4.41-5.38 4.41-9.246zM9.75 10a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM12 6.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPin;
