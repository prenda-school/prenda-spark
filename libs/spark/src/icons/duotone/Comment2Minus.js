import * as React from 'react';

function SvgComment2Minus(props) {
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
        d="M12 21a9 9 0 10-9-9c0 1.091.265 2.183.601 3.13.527 1.479.79 2.219.816 2.639.03.472.008.65-.136 1.1-.128.402-.438.866-1.056 1.794L3 21h9z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M3.75 12A8.25 8.25 0 1112 20.25H4.395c.067-.104.128-.202.184-.293.18-.3.326-.575.416-.86.076-.237.135-.447.163-.678a3.67 3.67 0 00.008-.697c-.02-.313-.12-.682-.255-1.104-.138-.434-.339-.998-.598-1.726l-.005-.014c-.32-.899-.558-1.901-.558-2.878zM12 2.25A9.75 9.75 0 002.25 12c0 1.206.291 2.386.645 3.38.265.746.457 1.287.587 1.694.135.423.18.634.187.742.014.222.012.33 0 .42a2.24 2.24 0 01-.103.406c-.037.117-.11.274-.27.538-.161.265-.382.597-.695 1.067l-.225.337A.75.75 0 003 21.75h9c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-3 9a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComment2Minus;
