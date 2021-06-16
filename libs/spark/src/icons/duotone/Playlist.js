import * as React from 'react';

function SvgPlaylist(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <circle cx={17} cy={19} r={2} fill={props.fillColor || '#F0F1F2'} />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M3 4.25a.75.75 0 000 1.5h16a.75.75 0 000-1.5H3zm0 4a.75.75 0 000 1.5h12a.75.75 0 000-1.5H3zM2.25 13a.75.75 0 01.75-.75h8a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM3 16.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H3zm14 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm1.25-1.2a2.75 2.75 0 101.5 2.45v-6.599l1.834 1.223a.75.75 0 10.832-1.248l-3-2A.75.75 0 0018.25 11v5.55z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlaylist;
