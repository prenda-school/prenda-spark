import * as React from 'react';

function SvgMusicPlus(props) {
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
        fill={props.fillColor || '#F0F1F2'}
        fillRule="evenodd"
        d="M2.879 4.879C2 5.757 2 7.172 2 10v6c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h6c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16V4H8c-2.828 0-4.243 0-5.121.879zM10 18a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M20.75 1a.75.75 0 00-1.5 0v2.25H17a.75.75 0 000 1.5h2.25V7a.75.75 0 001.5 0V4.75H23a.75.75 0 000-1.5h-2.25V1zM8 3.25h-.055c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v6.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337V10.5a.75.75 0 00-1.5 0V16c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103H8c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191v-6c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556C5.562 4.752 6.564 4.75 8 4.75h5.5a.75.75 0 000-1.5H8zM8.75 16a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM10 13.25c.45 0 .875.108 1.25.3V8a.75.75 0 011.166-.624l3 2a.75.75 0 11-.832 1.248L12.75 9.401V16A2.75 2.75 0 1110 13.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMusicPlus;