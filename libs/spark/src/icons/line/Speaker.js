import * as React from 'react';

function SvgSpeaker(props) {
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
        d="M12 1.25h-.042c-1.369 0-2.454 0-3.32.088-.888.09-1.629.28-2.277.713a4.75 4.75 0 00-1.31 1.31c-.434.648-.623 1.39-.713 2.277-.088.866-.088 1.951-.088 3.32v6.084c0 1.369 0 2.454.088 3.32.09.888.28 1.629.713 2.277.346.519.791.964 1.31 1.31.648.434 1.39.623 2.277.713.866.088 1.951.088 3.32.088h.084c1.369 0 2.454 0 3.32-.088.888-.09 1.629-.28 2.277-.712a4.753 4.753 0 001.31-1.311c.434-.648.623-1.39.713-2.277.088-.866.088-1.951.088-3.32V8.958c0-1.369 0-2.454-.088-3.32-.09-.888-.28-1.629-.712-2.277a4.751 4.751 0 00-1.311-1.31c-.648-.434-1.39-.623-2.277-.713-.866-.088-1.951-.088-3.32-.088H12zM7.194 3.298c.361-.241.827-.39 1.596-.468.781-.08 1.79-.08 3.21-.08s2.429 0 3.21.08c.77.079 1.235.227 1.596.468.354.237.66.542.896.896.241.361.39.827.468 1.596.08.781.08 1.79.08 3.21v6c0 1.42 0 2.429-.08 3.21-.079.77-.227 1.235-.468 1.596-.237.354-.542.66-.896.896-.361.241-.827.39-1.596.468-.781.08-1.79.08-3.21.08s-2.429 0-3.21-.08c-.77-.079-1.235-.227-1.596-.468a3.25 3.25 0 01-.896-.896c-.241-.361-.39-.827-.468-1.596-.08-.781-.08-1.79-.08-3.21V9c0-1.42 0-2.429.08-3.21.079-.77.227-1.235.468-1.596a3.25 3.25 0 01.896-.896zM9.75 9a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM12 5.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM11 17a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSpeaker;
