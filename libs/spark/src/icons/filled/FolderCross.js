import * as React from 'react';

function SvgFolderCross(props) {
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
        d="M6 2.25h-.116c-.818 0-1.376 0-1.855.128a3.75 3.75 0 00-2.651 2.651c-.128.479-.128 1.037-.128 1.855v7.171c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.601 1.36.86 2.26.981.867.117 1.97.117 3.337.117h8.11c1.367 0 2.47 0 3.337-.117.9-.12 1.658-.38 2.26-.981.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-2.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.982-.867-.116-1.97-.116-3.337-.116h-.934c-.907 0-1.216-.007-1.495-.086a2.252 2.252 0 01-.477-.198c-.254-.14-.477-.355-1.119-.996l-.07-.072c-.544-.543-.92-.92-1.38-1.175a3.75 3.75 0 00-.795-.33C9.28 2.25 8.748 2.25 7.98 2.25H6zm2.97 7.72a.75.75 0 011.06 0L12 11.94l1.97-1.97a.75.75 0 111.06 1.06L13.06 13l1.97 1.97a.75.75 0 01-1.06 1.06L12 14.06l-1.97 1.97a.75.75 0 11-1.06-1.06L10.94 13l-1.97-1.97a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFolderCross;
