import * as React from 'react';

function SvgDistributeVertically(props) {
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
        d="M3 3.75h18a.75.75 0 000-1.5H3a.75.75 0 000 1.5zm6 3.5h-.052c-.899 0-1.648 0-2.243.08-.627.084-1.194.27-1.65.725-.455.456-.64 1.023-.725 1.65-.08.595-.08 1.345-.08 2.243v.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.344.08 2.243.08h6.104c.898 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.344.08-2.242v-.104c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08H9zm12 14.5H3a.75.75 0 110-1.5h18a.75.75 0 010 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDistributeVertically;