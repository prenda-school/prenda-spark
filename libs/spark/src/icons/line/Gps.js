import * as React from 'react';

function SvgGps(props) {
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
        d="M12 1.25a.75.75 0 01.75.75v1.282a8.752 8.752 0 017.968 7.968H22a.75.75 0 010 1.5h-1.282a8.752 8.752 0 01-7.968 7.968V22a.75.75 0 01-1.5 0v-1.282a8.752 8.752 0 01-7.968-7.968H2a.75.75 0 010-1.5h1.282a8.752 8.752 0 017.968-7.968V2a.75.75 0 01.75-.75zm0 18a7.25 7.25 0 100-14.5 7.25 7.25 0 000 14.5zM14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.5 0a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGps;
