import * as React from 'react';

function SvgDroplet(props) {
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
        d="M20 13.852c0 10.864-16 10.864-16 0 0-4.668 3.647-8.435 6.016-10.39.843-.696 1.265-1.044 1.984-1.045.718 0 1.14.349 1.984 1.045C16.354 5.417 20 9.184 20 13.852z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M12 3.167c-.402 0-.614.137-1.507.873-1.153.952-2.6 2.331-3.754 4.022-1.155 1.692-1.989 3.655-1.989 5.79 0 2.517.92 4.348 2.253 5.555C8.35 20.626 10.163 21.25 12 21.25c1.836 0 3.65-.624 4.997-1.843 1.333-1.207 2.253-3.038 2.253-5.555 0-2.135-.834-4.098-1.989-5.79-1.154-1.69-2.602-3.07-3.754-4.022-.893-.736-1.105-.873-1.507-.873zm-2.363-.366c.75-.62 1.371-1.134 2.363-1.134s1.613.514 2.362 1.134l.1.082c1.216 1.004 2.776 2.486 4.038 4.334 1.261 1.847 2.25 4.102 2.25 6.635 0 2.915-1.08 5.158-2.747 6.667-1.653 1.497-3.84 2.231-6.003 2.231-2.164 0-4.35-.734-6.003-2.231C4.33 19.01 3.25 16.767 3.25 13.852c0-2.533.989-4.788 2.25-6.635 1.261-1.848 2.822-3.33 4.038-4.334l.1-.082z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDroplet;
