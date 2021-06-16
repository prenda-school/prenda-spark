import * as React from 'react';

function SvgShieldCross(props) {
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
        d="M1.47 1.47a.75.75 0 011.06 0l2.728 2.727 13.426 13.427 2.846 2.846a.75.75 0 11-1.06 1.06l-2.425-2.424-2.513 1.57-.095.06c-.89.556-1.46.913-2.073 1.097a4.75 4.75 0 01-2.728 0c-.613-.184-1.184-.54-2.072-1.096l-.096-.06-.097-.06c-1.44-.9-2.278-1.424-2.935-2.102a7.75 7.75 0 01-1.96-3.535c-.226-.917-.226-1.905-.226-3.604V5.777c0-.407.132-.792.361-1.105L1.47 2.53a.75.75 0 010-1.06zm3.28 4.34v5.453c0 1.845.005 2.64.183 3.357a6.25 6.25 0 001.58 2.85c.514.531 1.185.957 2.75 1.935 1.017.636 1.408.873 1.804.991a3.25 3.25 0 001.866 0c.396-.118.787-.355 1.804-.991l2.22-1.388L4.75 5.811zM12 3.023c-.558 0-1.105.193-2.546.734l-1.19.446a.75.75 0 11-.527-1.404l1.19-.447.133-.05c1.261-.473 2.077-.779 2.94-.779s1.678.306 2.94.78c.044.016.088.032.132.05l.042.015c1.22.457 2.194.823 2.948 1.205.78.396 1.39.841 1.842 1.494l-.616.428.616-.428c.453.653.655 1.38.752 2.25.094.84.094 1.88.094 3.184V15a.75.75 0 01-1.5 0v-4.456c0-1.358-.001-2.315-.084-3.062-.082-.73-.235-1.186-.495-1.561s-.633-.679-1.288-1.011c-.67-.34-1.566-.678-2.837-1.154-1.44-.54-1.988-.734-2.546-.734z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgShieldCross;
