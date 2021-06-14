import * as React from 'react';

function SvgMegaphone(props) {
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
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M14.05 6.4c1.417-1.063 2.412-1.806 3.188-2.228.781-.425 1.111-.395 1.321-.29.21.105.432.35.56 1.23.129.875.131 2.117.131 3.888v4c0 1.77-.002 3.013-.13 3.887-.13.88-.351 1.126-.561 1.23-.21.106-.54.136-1.321-.289-.776-.422-1.771-1.166-3.188-2.228l-1.3-.975v-7.25l1.3-.975zm6.554-1.505c.096.656.129 1.468.14 2.429a3.751 3.751 0 010 7.352c-.011.96-.044 1.772-.14 2.429-.148 1.004-.478 1.907-1.374 2.354-.896.448-1.817.171-2.708-.313-.885-.48-1.968-1.293-3.318-2.306l-.054-.04-1.4-1.05h-2v3.75a2.25 2.25 0 01-4.5 0v-3.809A4.751 4.751 0 016 6.25h5.75l1.4-1.05.053-.04c1.351-1.014 2.434-1.826 3.319-2.306.891-.485 1.812-.762 2.708-.314.896.448 1.226 1.35 1.374 2.355z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMegaphone;
