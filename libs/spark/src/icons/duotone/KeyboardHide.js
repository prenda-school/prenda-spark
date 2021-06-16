import * as React from 'react';

function SvgKeyboardHide(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <rect
        width={20}
        height={12}
        x={2}
        y={3}
        fill={props.fillColor || '#F0F1F2'}
        rx={2}
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M5.948 2.25h12.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v4.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242V6.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08zM3.905 3.817c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C2.753 5.388 2.75 6.036 2.75 7v4c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h12c.964 0 1.612-.002 2.095-.066.461-.063.659-.17.789-.3.13-.13.237-.328.3-.79.064-.482.066-1.13.066-2.094V7c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066H6c-.964 0-1.612.002-2.095.067zM9.25 11a.75.75 0 01.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75zM6 12a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 100-2 1 1 0 000 2zM7 7a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zm.53 11.53l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06L12 19.94l2.47-2.47a.75.75 0 111.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgKeyboardHide;
