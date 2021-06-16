import * as React from 'react';

function SvgDropletSlash(props) {
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
        d="M6.762 6.762C5.25 8.695 4 11.119 4 13.852c0 8.918 10.782 10.516 14.644 4.792L6.762 6.762z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M1.47 1.47a.75.75 0 011.06 0l4.762 4.762 11.882 11.882 3.356 3.356a.75.75 0 11-1.06 1.06l-2.75-2.749c-2.227 2.612-5.873 3.478-9.03 2.685-3.484-.876-6.44-3.784-6.44-8.614 0-2.709 1.13-5.1 2.52-7.02L1.47 2.53a.75.75 0 010-1.06zm5.376 6.437C5.64 9.629 4.75 11.649 4.75 13.852c0 4.088 2.435 6.438 5.306 7.16 2.732.686 5.8-.11 7.6-2.296L6.845 7.907zM12 3.167c-.402 0-.615.137-1.51.875-.194.16-.398.334-.607.52a.75.75 0 11-.994-1.124c.223-.197.44-.382.647-.553l.1-.082c.75-.62 1.372-1.135 2.364-1.136.991 0 1.613.514 2.362 1.134l.1.082c1.216 1.004 2.776 2.486 4.038 4.334 1.261 1.847 2.25 4.102 2.25 6.635 0 .424-.023.835-.067 1.232a.75.75 0 11-1.491-.167c.038-.34.058-.695.058-1.065 0-2.135-.834-4.098-1.989-5.79-1.154-1.69-2.602-3.07-3.754-4.022-.893-.736-1.105-.873-1.507-.873z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDropletSlash;
