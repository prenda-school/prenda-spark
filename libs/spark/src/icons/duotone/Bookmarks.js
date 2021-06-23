import * as React from 'react';

function SvgBookmarks(props) {
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
        d="M18 22V10c0-2.828 0-4.243-.879-5.121C16.243 4 14.828 4 12 4h-2c-2.828 0-4.243 0-5.121.879C4 5.757 4 7.172 4 10v12l5.015-2.866c.97-.554 1.454-.83 1.985-.83.531 0 1.016.276 1.985.83L18 22z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M14 1.75c.953 0 1.356.002 1.685.045a5.25 5.25 0 014.52 4.52c.043.329.045.732.045 1.685v11a.75.75 0 001.5 0V7.93c0-.862 0-1.372-.058-1.811a6.75 6.75 0 00-5.81-5.811C15.441.25 14.931.25 14.07.25H10a3.75 3.75 0 00-3.705 3.166c-.764.137-1.416.402-1.947.932-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337V22a.75.75 0 001.122.651l5.016-2.866c.497-.284.823-.47 1.09-.59.253-.113.399-.142.522-.142s.269.03.521.142c.268.12.594.306 1.091.59l5.016 2.866A.75.75 0 0018.75 22V9.945c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117h-2.11c-.775 0-1.464 0-2.074.021A2.25 2.25 0 0110 1.75h4zM5.409 5.409c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h2c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v10.708l-3.893-2.225-.03-.017c-.46-.263-.85-.486-1.192-.64-.365-.163-.727-.273-1.135-.273-.408 0-.77.11-1.135.274-.342.153-.733.376-1.192.639l-.03.017-3.893 2.225V10c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBookmarks;