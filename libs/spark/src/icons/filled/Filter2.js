import * as React from 'react';

function SvgFilter2(props) {
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
        d="M6.454 2.25h-.062c-.905 0-1.668 0-2.234.081-.56.081-1.226.281-1.528.952-.3.671-.008 1.301.304 1.774.315.477.822 1.047 1.424 1.724l.04.046 3.394 3.818c.651.733.895 1.014 1.064 1.324.139.257.243.53.31.814.08.345.084.716.084 1.696V19a2.75 2.75 0 005.5 0v-4.52c0-.98.005-1.352.085-1.697a3.25 3.25 0 01.31-.814c.168-.31.412-.591 1.063-1.324l3.394-3.818.04-.046c.602-.677 1.109-1.247 1.424-1.724.312-.473.605-1.103.303-1.774-.3-.67-.966-.87-1.527-.952-.566-.081-1.329-.081-2.234-.081H6.454z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFilter2;
