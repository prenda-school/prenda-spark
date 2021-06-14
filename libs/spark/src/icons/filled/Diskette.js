import * as React from 'react';

function SvgDiskette(props) {
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
        d="M2 8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h7.015c1.226 0 1.84 0 2.39.228.552.229.985.662 1.852 1.53l.986.985c.867.867 1.3 1.3 1.529 1.852.228.55.228 1.164.228 2.39V16c0 2.828 0 4.243-.879 5.121-.797.798-2.035.872-4.371.878v-5.051c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08h-.104c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.726-.456.455-.642 1.022-.726 1.65-.08.594-.08 1.343-.08 2.242V22c-2.336-.008-3.574-.081-4.371-.879C2 20.243 2 18.828 2 16V8zm6.75 14h6.5v-5c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.066c-.461.063-.659.17-.789.3-.13.13-.237.328-.3.79-.064.482-.066 1.13-.066 2.094v5zM7.25 8A.75.75 0 018 7.25h8a.75.75 0 010 1.5H8A.75.75 0 017.25 8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDiskette;
