import * as React from 'react';

function SvgComment2Slash(props) {
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
        d="M3 21h9a8.974 8.974 0 006.5-2.775L5.775 5.5A8.974 8.974 0 003 12c0 1.091.265 2.183.601 3.13.527 1.479.79 2.219.816 2.639.03.472.008.65-.136 1.1-.128.402-.438.866-1.056 1.794L3 21z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M3.53 1.47a.75.75 0 00-1.06 1.06l2.605 2.606A9.721 9.721 0 002.25 12c0 1.206.291 2.386.645 3.38.265.746.457 1.287.587 1.694.135.423.18.634.187.742.014.222.012.33 0 .42a2.24 2.24 0 01-.103.406c-.037.117-.11.274-.27.538-.161.265-.382.597-.695 1.067l-.225.337A.75.75 0 003 21.75h9a9.722 9.722 0 006.864-2.825l2.606 2.605a.75.75 0 101.06-1.06l-19-19zm14.273 16.394L6.136 6.197A8.221 8.221 0 003.75 12c0 .977.238 1.98.558 2.878l.005.014c.259.728.46 1.292.598 1.726.135.422.235.792.255 1.104.015.25.02.467-.008.697-.028.23-.087.44-.163.679-.09.284-.235.56-.416.859-.056.091-.117.189-.184.293H12a8.22 8.22 0 005.803-2.386zm-7.637-13.91a8.25 8.25 0 019.762 10.338 8.249 8.249 0 01-.147.458.75.75 0 101.414.5A9.689 9.689 0 0021.75 12 9.75 9.75 0 0012 2.25a9.78 9.78 0 00-3.213.542.75.75 0 00.495 1.416c.287-.1.583-.185.884-.254z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComment2Slash;
