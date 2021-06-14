import * as React from 'react';

function SvgPin2(props) {
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
        d="M12 1.25a4.75 4.75 0 00-.75 9.441V17a.75.75 0 001.5 0v-6.309A4.751 4.751 0 0012 1.25zM8.162 14.148a.75.75 0 10-.324-1.465c-1.543.341-2.894.875-3.88 1.568-.973.683-1.708 1.613-1.708 2.749 0 .796.366 1.498.914 2.074.544.572 1.296 1.052 2.167 1.44 1.746.775 4.104 1.236 6.669 1.236 2.565 0 4.923-.46 6.669-1.236.871-.388 1.623-.868 2.167-1.44.548-.576.914-1.278.914-2.074 0-1.136-.735-2.066-1.708-2.75-.986-.692-2.337-1.226-3.88-1.567a.75.75 0 00-.324 1.465c1.42.314 2.569.787 3.342 1.33.787.553 1.07 1.088 1.07 1.522 0 .308-.137.658-.5 1.04-.367.385-.934.767-1.69 1.103-1.513.672-3.654 1.107-6.06 1.107-2.405 0-4.547-.435-6.06-1.107-.756-.336-1.323-.718-1.69-1.103-.363-.382-.5-.732-.5-1.04 0-.434.283-.97 1.07-1.522.773-.543 1.921-1.016 3.342-1.33z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPin2;
