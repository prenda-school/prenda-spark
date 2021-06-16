import * as React from 'react';

function SvgPrinter(props) {
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
        d="M10 2.25h-.052c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243V8c0 .043.004.086.01.127-.292.06-.538.147-.76.275A3 3 0 003.402 9.5C3 10.196 3 11.13 3 13v2a3 3 0 002.25 2.905v.12c0 .445 0 .816.02 1.12.022.317.07.617.19.907a2.75 2.75 0 001.488 1.489c.29.12.59.167.907.188.304.021.675.021 1.12.021h6.05c.445 0 .816 0 1.12-.02.317-.022.617-.069.907-.19a2.75 2.75 0 001.489-1.488c.12-.29.167-.59.188-.907.021-.304.021-.675.021-1.12v-.12A3.001 3.001 0 0021 15v-2c0-1.87 0-2.804-.402-3.5A3 3 0 0019.5 8.402a2.472 2.472 0 00-.76-.275.76.76 0 00.01-.127V6.948c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08H10zm7.25 5.757V7c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C6.753 5.388 6.75 6.036 6.75 7v1.007C7.114 8 7.527 8 8 8h8c.473 0 .886 0 1.25.007zM6 10.25a.75.75 0 000 1.5h1a.75.75 0 000-1.5H6zm1.522 5.595c.077-.032.194-.061.435-.078A17.07 17.07 0 019 15.75h6c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 01-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017H9c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078a1.25 1.25 0 01-.677-.677c-.032-.077-.061-.194-.078-.435A17.091 17.091 0 016.75 18c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPrinter;
