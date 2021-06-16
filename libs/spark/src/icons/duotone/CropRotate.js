import * as React from 'react';

function SvgCropRotate(props) {
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
        d="M8 8h4c1.886 0 2.828 0 3.414.586C16 9.172 16 10.114 16 12v4h-4c-1.886 0-2.828 0-3.414-.586C8 14.828 8 13.886 8 12V8z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M11.347 1.63A.75.75 0 0112 1.25c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 01-1.5 0c0-4.637-3.413-8.478-7.863-9.147l.756 1.261a.75.75 0 11-1.286.772l-1.5-2.5a.75.75 0 01-.01-.756zM2 11.25a.75.75 0 01.75.75c0 4.637 3.413 8.478 7.863 9.147l-.756-1.261a.75.75 0 011.286-.772l1.5 2.5A.75.75 0 0112 22.75C6.063 22.75 1.25 17.937 1.25 12a.75.75 0 01.75-.75zm6-6a.75.75 0 01.75.75v6c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h6a.75.75 0 010 1.5h-1.25V18a.75.75 0 01-1.5 0v-1.25h-3.302c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242V8.75H6a.75.75 0 010-1.5h1.25V6A.75.75 0 018 5.25zm4 3.5c.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095v1.5a.75.75 0 001.5 0v-1.552c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08H10.5a.75.75 0 000 1.5H12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCropRotate;
