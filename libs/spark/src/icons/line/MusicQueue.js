import * as React from 'react';

function SvgMusicQueue(props) {
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
        d="M7.945 2.25h2.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v6.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117zM4.808 3.853c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4C2.752 6.563 2.75 7.564 2.75 9v6c0 1.435.002 2.437.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.754.103-1.756.103-3.191V9c0-1.435-.002-2.436-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103zM19 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zM22.75 8a.75.75 0 00-1.5 0v8a.75.75 0 001.5 0V8zM8 13.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm1.25-1.2a2.75 2.75 0 101.5 2.45V8.401l1.834 1.223a.75.75 0 10.832-1.248l-3-2A.75.75 0 009.25 7v5.55z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMusicQueue;
