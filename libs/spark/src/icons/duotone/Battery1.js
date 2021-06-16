import * as React from 'react';

function SvgBattery1(props) {
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
        height={12}
        x={2}
        y={6}
        fill={props.fillColor || '#F0F1F2'}
        rx={3}
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M7.945 5.25h6.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.521.522.785 1.16.925 1.907.168.007.319.02.46.048a2.75 2.75 0 012.16 2.16c.053.268.053.571.053.964v1.146c0 .393 0 .696-.053.963a2.75 2.75 0 01-2.16 2.161 3.01 3.01 0 01-.46.048c-.14.746-.404 1.385-.925 1.907-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117zm12.78 8.98a1.25 1.25 0 001-.986c.021-.103.025-.243.025-.744v-1c0-.5-.004-.641-.024-.744a1.25 1.25 0 00-1-.985c.024.634.024 1.357.024 2.174v.11c0 .817 0 1.54-.025 2.174zM4.808 6.852c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4-.101.754-.103 1.756-.103 3.191 0 1.435.002 2.437.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191 0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103zM6 9.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0v-4A.75.75 0 016 9.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBattery1;
