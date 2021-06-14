import * as React from 'react';

function SvgBook(props) {
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
        d="M13 3h-2c-2.828 0-4.243 0-5.121.879C5 4.757 5 6.172 5 9v7h14V9c0-2.828 0-4.243-.879-5.121C17.243 3 15.828 3 13 3z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M10.945 2.25h2.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v8.107c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08H7.5a3.25 3.25 0 01-3.25-3.25V8.945c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117zM5.75 18.5c0 .966.784 1.75 1.75 1.75H15c.964 0 1.612-.002 2.095-.067.461-.062.659-.169.789-.3.13-.13.237-.327.3-.788.064-.483.066-1.131.066-2.095v-.25H7.5a1.75 1.75 0 00-1.75 1.75zm0-2.74V9c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h2c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v6.25H7.5c-.644 0-1.245.188-1.75.51zM8.25 7A.75.75 0 019 6.25h6a.75.75 0 010 1.5H9A.75.75 0 018.25 7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBook;
