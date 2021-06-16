import * as React from 'react';

function SvgFileCross(props) {
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
        d="M12.657 2.25c.21 0 .406 0 .593.002v1.8c0 .899 0 1.648.08 2.243.084.627.27 1.194.726 1.65.455.455 1.022.64 1.65.725.594.08 1.343.08 2.242.08h1.8c.002.187.002.383.002.593v5.712c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.601-1.36.86-2.26.981-.867.117-1.97.117-3.337.117h-2.11c-1.367 0-2.47 0-3.337-.117-.9-.12-1.658-.38-2.26-.981-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.982.867-.116 1.97-.116 3.337-.116h1.712zm6.808 4.558c.06.143.106.29.144.442H18c-.964 0-1.612-.002-2.095-.066-.461-.063-.659-.17-.789-.3-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094V2.391c.152.038.299.085.442.144.692.287 1.226.822 1.995 1.591l.1.101.486.485.1.101c.77.769 1.305 1.303 1.591 1.995zM10.53 11.47a.75.75 0 10-1.06 1.06L10.94 14l-1.47 1.47a.75.75 0 001.06 1.06L12 15.06l1.47 1.47a.75.75 0 101.06-1.06L13.06 14l1.47-1.47a.75.75 0 00-1.06-1.06L12 12.94l-1.47-1.47z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFileCross;
