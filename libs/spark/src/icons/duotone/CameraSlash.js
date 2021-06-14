import * as React from 'react';

function SvgCameraSlash(props) {
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
        d="M21.999 8.625V13c0 3.771 0 5.657-1.172 6.828-.17.17-.355.316-.559.44l-5.44-5.44a4 4 0 10-5.657-5.657L5.047 5.047c.188-.03.381-.046.578-.046.24 0 .47-.095.64-.265l.614-.614c.936-.936 1.403-1.403 1.977-1.693a4 4 0 01.549-.227C10.014 2 10.675 2 11.999 2c1.323 0 1.985 0 2.595.201.189.062.372.138.55.227.572.29 1.04.757 1.976 1.693l.614.614c.17.17.4.265.64.265A3.625 3.625 0 0122 8.625z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M11.999 1.25h-.127c-1.201 0-1.977 0-2.703.239a4.748 4.748 0 00-.652.27c-.682.344-1.23.892-2.08 1.743l-.09.089-.613.613a.156.156 0 01-.11.046 4.34 4.34 0 00-.303.01l-2.79-2.79A.75.75 0 001.47 2.53l3.045 3.046L19.738 20.8l1.732 1.731a.75.75 0 001.06-1.06l-1.142-1.142c.727-.744 1.052-1.683 1.208-2.839.153-1.14.153-2.595.153-4.433V8.625a4.375 4.375 0 00-4.375-4.375.156.156 0 01-.11-.046l-.613-.613-.09-.09c-.85-.85-1.398-1.398-2.08-1.742a4.753 4.753 0 00-.652-.27c-.726-.24-1.502-.24-2.704-.239H12zM9.213 8.153L6.536 5.476c.093-.061.18-.132.259-.211l.613-.613c.97-.97 1.344-1.332 1.785-1.554.143-.073.293-.134.446-.185.469-.154.988-.163 2.36-.163 1.372 0 1.891.009 2.36.163.153.05.303.112.447.185.44.222.814.583 1.784 1.554l.613.613c.31.31.732.485 1.171.485a2.875 2.875 0 012.875 2.875V13c0 1.907-.002 3.262-.14 4.29-.132.98-.377 1.556-.781 1.977l-4.48-4.48a4.75 4.75 0 00-6.634-6.634zm1.08 1.08l4.474 4.473a3.25 3.25 0 00-4.473-4.473zm-7.24-1.896a.75.75 0 00-1.34-.674 4.349 4.349 0 00-.464 1.962v4.431c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153H14l2.001-.001a.75.75 0 10-.004-1.5l-1.999.001h-4c-1.907 0-3.262-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.027-.14-2.382-.14-4.289V8.625a2.897 2.897 0 01.304-1.288zM8.75 12a.75.75 0 00-1.5 0A4.75 4.75 0 0012 16.75a.75.75 0 000-1.5A3.25 3.25 0 018.75 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCameraSlash;
