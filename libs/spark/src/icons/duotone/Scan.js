import * as React from 'react';

function SvgScan(props) {
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
        d="M3 15v-3h18v3c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M7.5 2.25h-.027c-.676 0-1.222 0-1.666.03-.456.031-.86.097-1.242.255a3.75 3.75 0 00-2.03 2.03c-.158.382-.224.786-.255 1.242-.03.444-.03.99-.03 1.666V8a.75.75 0 001.5 0v-.5c0-.71 0-1.203.027-1.59.026-.38.074-.602.144-.771A2.25 2.25 0 015.14 3.921c.169-.07.39-.118.77-.144.388-.027.882-.027 1.591-.027H8a.75.75 0 000-1.5h-.5zm9 1.5c.71 0 1.203 0 1.59.027.38.026.602.074.771.144.551.229.99.667 1.218 1.218.07.169.118.39.144.77.027.388.027.882.027 1.591V8a.75.75 0 001.5 0v-.527c0-.676 0-1.222-.03-1.666-.031-.456-.097-.86-.255-1.242a3.75 3.75 0 00-2.03-2.03c-.382-.158-.786-.224-1.242-.255-.445-.03-.99-.03-1.666-.03H16a.75.75 0 000 1.5h.5zM3.75 16a.75.75 0 00-1.5 0v.527c0 .676 0 1.221.03 1.665.031.457.097.86.255 1.243a3.75 3.75 0 002.03 2.03c.382.158.786.224 1.242.255.444.03.99.03 1.666.03H8a.75.75 0 000-1.5h-.5c-.71 0-1.203 0-1.59-.027-.38-.026-.602-.074-.771-.144a2.25 2.25 0 01-1.218-1.218c-.07-.169-.118-.39-.144-.77-.027-.388-.027-.882-.027-1.591V16zm18 0a.75.75 0 00-1.5 0v.5c0 .71 0 1.203-.027 1.59-.026.38-.074.602-.144.771a2.25 2.25 0 01-1.218 1.218c-.169.07-.39.118-.77.144-.388.027-.882.027-1.591.027H16a.75.75 0 000 1.5h.527c.676 0 1.221 0 1.665-.03.457-.031.86-.097 1.243-.255a3.75 3.75 0 002.03-2.03c.158-.382.224-.786.255-1.242.03-.445.03-.99.03-1.666V16zM2 11.25a.75.75 0 000 1.5h20a.75.75 0 000-1.5H2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgScan;