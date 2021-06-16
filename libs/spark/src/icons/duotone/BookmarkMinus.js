import * as React from 'react';

function SvgBookmarkMinus(props) {
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
        d="M19 21V9c0-2.828 0-4.243-.879-5.121C17.243 3 15.828 3 13 3h-2c-2.828 0-4.243 0-5.121.879C5 4.757 5 6.172 5 9v12l5.015-2.866c.97-.554 1.454-.83 1.985-.83.531 0 1.016.276 1.985.83L19 21z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M11 2.25h-.055c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337V21a.75.75 0 001.122.651l5.015-2.866c.498-.284.824-.47 1.092-.59.252-.113.398-.142.521-.142s.269.03.521.142c.268.12.594.306 1.091.59l5.016 2.866A.75.75 0 0019.75 21V8.945c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117H11zM6.409 4.409c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h2c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v10.708l-3.893-2.225-.03-.017c-.46-.263-.85-.486-1.192-.64-.365-.163-.727-.273-1.135-.273-.408 0-.77.11-1.135.274-.342.153-.733.376-1.192.639l-.03.017-3.893 2.225V9c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399zM9.5 9.75a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBookmarkMinus;
