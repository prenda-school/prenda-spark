import * as React from 'react';

function SvgLock(props) {
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
        width={14}
        height={14}
        x={5}
        y={8}
        fill={props.fillColor || '#F0F1F2'}
        rx={7}
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M11.975 1.25h.05c.445 0 .816 0 1.12.02.318.022.617.07.907.19a2.75 2.75 0 011.489 1.488c.12.29.167.59.188.907.021.304.021.675.021 1.12v3.241a7.75 7.75 0 11-7.5 0V4.975c0-.445 0-.816.02-1.12a2.84 2.84 0 01.19-.907 2.75 2.75 0 011.488-1.489c.29-.12.59-.167.907-.188.304-.021.675-.021 1.12-.021zM14.25 5v2.582A7.75 7.75 0 0012 7.25a7.75 7.75 0 00-2.25.332V5c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677.077-.032.194-.061.435-.078.247-.017.567-.017 1.043-.017s.796 0 1.043.017c.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043zM12 8.75a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5zm.75 5.25a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgLock;
