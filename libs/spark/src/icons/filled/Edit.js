import * as React from 'react';

function SvgEdit(props) {
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
        d="M17.15 2.793a2.75 2.75 0 013.7 0c.049.045.1.097.168.164l.012.013.013.012c.067.068.12.12.163.168a2.75 2.75 0 01-.163 3.868l-.013.012-3.933 3.933-.073.074c-.708.708-1.166 1.166-1.729 1.485-.563.318-1.19.475-2.162.718l-.1.025-1.851.463a.75.75 0 01-.91-.91l.463-1.85.025-.101c.243-.972.4-1.6.718-2.162.32-.563.777-1.02 1.485-1.729l.074-.073L16.97 2.97l.012-.013c.068-.067.12-.12.168-.164zm-6.206-.543H12a.75.75 0 010 1.5h-1c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289v2c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-1a.75.75 0 011.5 0v1.056c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEdit;
