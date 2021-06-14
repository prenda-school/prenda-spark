import * as React from 'react';

function SvgMusicNote(props) {
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
        d="M18.794 3.379c-.595.052-1.382.236-2.538.508l-4 .941c-.758.178-1.261.298-1.633.434-.352.13-.505.245-.603.37-.098.124-.176.298-.221.671-.048.393-.049.91-.049 1.689V19a3.75 3.75 0 11-1.5-3V7.947c0-.722 0-1.33.06-1.823.063-.524.2-1.002.534-1.424.334-.421.768-.665 1.263-.846.467-.171 1.059-.31 1.762-.476l.043-.01 4-.941.057-.014c1.085-.255 1.978-.465 2.694-.528.747-.066 1.45.013 2.044.484.596.472.833 1.137.94 1.88.103.71.103 1.628.103 2.743V16a3.75 3.75 0 11-1.5-3V7.05c0-1.187-.002-1.996-.087-2.587-.082-.571-.224-.789-.387-.918s-.407-.217-.982-.166zM20.25 16a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zM6 16.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMusicNote;
