import * as React from 'react';

function SvgClipboardText(props) {
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
        d="M9 3.035c-1.872.078-3.02.328-3.828 1.137C4 5.343 4 7.229 4 11v2c0 3.771 0 5.657 1.172 6.828C6.343 21 8.229 21 12 21c3.771 0 5.657 0 6.828-1.172C20 18.657 20 16.771 20 13v-2c0-3.771 0-5.657-1.172-6.828-.808-.809-1.956-1.06-3.828-1.137A2 2 0 0113 5h-2a2 2 0 01-2-1.965z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M8.353 3.75c-.393 0-.57.004-.717.02A3.25 3.25 0 004.77 6.636c-.019.17-.02.384-.02.935V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14 1.907 0 3.261-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289V7.571c0-.55-.001-.764-.02-.935a3.25 3.25 0 00-2.866-2.866 7.011 7.011 0 00-.718-.02 2.751 2.751 0 01-2.646 2h-2a2.751 2.751 0 01-2.647-2zm7.293-1.5c.387 0 .652.003.886.03a4.75 4.75 0 014.188 4.188c.03.266.03.57.03 1.049v5.539c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V7.517c0-.479 0-.783.03-1.049A4.75 4.75 0 017.468 2.28c.234-.027.498-.03.885-.03A2.751 2.751 0 0111 .25h2a2.75 2.75 0 012.646 2zM9.75 3c0-.69.56-1.25 1.25-1.25h2a1.25 1.25 0 110 2.5h-2c-.69 0-1.25-.56-1.25-1.25zm-1.5 7A.75.75 0 019 9.25h6a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 13.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5H9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgClipboardText;
