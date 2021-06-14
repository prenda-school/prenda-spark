import * as React from 'react';

function SvgBookPlus(props) {
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
        height={18}
        x={4}
        y={4}
        fill={props.fillColor || '#F0F1F2'}
        rx={3}
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M18 .25a.75.75 0 01.75.75v2.25H21a.75.75 0 010 1.5h-2.25V7a.75.75 0 01-1.5 0V4.75H15a.75.75 0 010-1.5h2.25V1A.75.75 0 0118 .25zm-8.055 3H11.5a.75.75 0 010 1.5H10c-1.435 0-2.437.002-3.192.103-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4-.101.754-.103 1.756-.103 3.191v6c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191v-5.5a.75.75 0 011.5 0v5.555c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117zM8 7.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H8zM7.25 12a.75.75 0 01.75-.75h4a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zM8 15.25a.75.75 0 000 1.5h2a.75.75 0 000-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBookPlus;
