import * as React from 'react';

function SvgCommentCheck(props) {
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
        d="M9 3.25h-.055c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v2.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h6.166c.974 0 1.343.005 1.691.087.35.082.68.243 1.552.678l2.31 1.156A.75.75 0 0021.75 20V9.945c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117H9zM4.409 5.409c.277-.277.665-.457 1.4-.556C6.562 4.752 7.564 4.75 9 4.75h6c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v8.787l-1.225-.613-.08-.04c-.765-.383-1.259-.63-1.798-.757-.54-.127-1.092-.127-1.947-.127H9c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191v-2c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399zM16.03 9.03a.75.75 0 00-1.06-1.06L11 11.94l-1.47-1.47a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCommentCheck;
