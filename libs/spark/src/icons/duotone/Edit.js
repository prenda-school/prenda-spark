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
        fill={props.fillColor || '#F0F1F2'}
        d="M17.5 3.5l-3.933 3.933c-.779.779-1.168 1.168-1.436 1.641-.268.473-.401 1.008-.668 2.076L11 13l1.85-.463c1.069-.267 1.603-.4 2.076-.668.473-.268.862-.657 1.64-1.436L20.5 6.5c.08-.08.12-.12.151-.155a2 2 0 000-2.69A4.9 4.9 0 0020.5 3.5c-.08-.08-.12-.12-.155-.152a2 2 0 00-2.69 0 5.431 5.431 0 00-.155.152z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M19.84 3.903a1.25 1.25 0 00-1.68 0 4.748 4.748 0 00-.13.127l-.307.307a1.903 1.903 0 001.94 1.94l.307-.307c.085-.086.11-.11.127-.13a1.25 1.25 0 000-1.68 4.717 4.717 0 00-.127-.13 4.766 4.766 0 00-.13-.127zm-1.448 3.645a3.428 3.428 0 01-1.94-1.94l-2.355 2.355c-.807.807-1.107 1.117-1.313 1.48-.206.365-.317.782-.594 1.889l-.16.637.638-.16c1.107-.276 1.524-.387 1.888-.593.364-.206.674-.506 1.48-1.313l2.356-2.355zM17.15 2.793a2.75 2.75 0 013.868.164l.012.013.013.012c.067.068.12.12.163.168a2.75 2.75 0 01-.163 3.868l-.013.012-3.933 3.933-.073.074c-.708.708-1.166 1.166-1.729 1.484-.563.32-1.19.476-2.162.719l-.1.025-1.851.462a.75.75 0 01-.91-.909l.463-1.85.025-.101c.243-.972.4-1.6.718-2.162.32-.563.777-1.02 1.485-1.729l.074-.073L16.97 2.97l.012-.013c.068-.067.12-.12.168-.164zm-6.206-.543H12a.75.75 0 010 1.5h-1c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.027-.14 2.382-.14 4.289v2c0 1.907.002 3.261.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.028.14-2.382.14-4.29v-1a.75.75 0 011.5 0v1.057c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433.158-1.173.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEdit;
