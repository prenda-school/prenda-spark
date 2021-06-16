import * as React from 'react';

function SvgGrid08(props) {
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
        width={18}
        height={18}
        x={3}
        y={3}
        fill={props.fillColor || '#F0F1F2'}
        rx={2}
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M7 2.25h-.052c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v10.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h10.104c.899 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242V6.948c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.343-.08-2.242-.08H7zm13.25 12v-4.5H9.75v4.5h10.5zm-10.5 1.5h10.5V17c0 .964-.002 1.612-.067 2.095-.062.461-.169.659-.3.789-.13.13-.327.237-.788.3-.483.064-1.131.066-2.095.066H9.75v-4.5zM8.25 15V9.75h-4.5V17c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h1.25V15zm-4.5-6.75h16.5V7c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066H7c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C3.753 5.388 3.75 6.036 3.75 7v1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGrid08;
