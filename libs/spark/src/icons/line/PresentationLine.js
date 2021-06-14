import * as React from 'react';

function SvgPresentationLine(props) {
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
        d="M1.25 3A.75.75 0 012 2.25h20a.75.75 0 010 1.5h-1.25v5.305c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116H12.75v1.825l4.636 2.782a.75.75 0 11-.772 1.286l-3.864-2.318V21a.75.75 0 01-1.5 0v-1.675l-3.864 2.318a.75.75 0 11-.772-1.286l4.636-2.782V15.75H9.945c-1.367 0-2.47 0-3.337-.117-.9-.12-1.658-.38-2.26-.981-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337V3.75H2A.75.75 0 011.25 3zM12 14.25h2c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191V3.75H4.75V9c0 1.435.002 2.437.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h2zm4.416-5.626a.75.75 0 10-.832-1.248l-2.489 1.659L11.53 7.47a.75.75 0 00-.946-.094l-3 2a.75.75 0 10.832 1.248l2.488-1.659 1.566 1.565a.75.75 0 00.946.094l3-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPresentationLine;
