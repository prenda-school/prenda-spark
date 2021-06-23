import * as React from 'react';

function SvgExternalLink(props) {
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
        d="M9 2.25h-.055c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v6.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337V14a.75.75 0 00-1.5 0v1c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191V9c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556C6.562 3.752 7.564 3.75 9 3.75h1a.75.75 0 000-1.5H9zm5.25.75c0 .414.336.75.75.75h4.19l-7.72 7.72a.75.75 0 101.06 1.06l7.72-7.72V9a.75.75 0 001.5 0V3a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgExternalLink;