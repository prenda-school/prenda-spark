import * as React from 'react';

function SvgCopy(props) {
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
        d="M2 8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h2c2.829 0 4.243 0 5.121.879.88.878.88 2.293.88 5.121v2c0 2.828 0 4.243-.88 5.121-.878.879-2.293.879-5.12.879H8c-2.83 0-4.244 0-5.122-.879C2 14.243 2 12.828 2 10V8z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M8 1.25h-.055c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v2.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.715.096 1.59.113 2.642.115.002 1.048.015 1.914.105 2.62.108.852.34 1.574.88 2.165.074.08.151.157.232.23.59.542 1.312.773 2.164.881.822.105 1.861.105 3.15.105h2.274c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-2.273c0-1.29 0-2.33-.105-3.15-.108-.853-.34-1.575-.88-2.165a3.762 3.762 0 00-.232-.232c-.59-.54-1.312-.772-2.164-.88-.706-.09-1.572-.103-2.62-.105-.002-1.052-.02-1.927-.115-2.642-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117H8zm8.75 7.5v1.305c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116H8.75c.003 1.049.015 1.821.093 2.43.088.696.25 1.07.498 1.34.044.048.09.095.139.139.27.247.644.41 1.34.498.716.092 1.66.093 3.013.093H16c1.436 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.4-.556.276-.277.456-.665.555-1.4.102-.755.103-1.756.103-3.191v-2.167c0-1.353-.001-2.297-.093-3.013-.088-.696-.25-1.07-.498-1.34a2.232 2.232 0 00-.139-.139c-.27-.247-.644-.41-1.34-.498-.609-.078-1.381-.09-2.43-.093zM3.41 3.41c.276-.277.664-.457 1.398-.556C5.564 2.752 6.565 2.75 8 2.75h2c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.4.556.276.277.456.665.555 1.4.101.754.103 1.756.103 3.191v2c0 1.435-.002 2.437-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.754.101-1.756.103-3.19.103H8c-1.436 0-2.437-.002-3.193-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191V8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCopy;
