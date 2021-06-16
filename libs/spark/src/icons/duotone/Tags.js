import * as React from 'react';

function SvgTags(props) {
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
        d="M14 20H8.76c-1.358 0-2.037 0-2.634-.274-.597-.275-1.038-.79-1.922-1.821l-.857-1C1.75 15.04.95 14.11.95 13c0-1.11.799-2.041 2.396-3.905l.857-1c.884-1.03 1.325-1.546 1.922-1.82C6.723 6 7.402 6 8.76 6H14c2.83 0 4.243 0 5.122.879C20 7.757 20 9.172 20 12v2c0 2.828 0 4.243-.879 5.121-.878.88-2.293.88-5.121.88zm-5-5a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M18.206 3.806c-.738-.055-1.677-.056-2.984-.056H9a.75.75 0 110-1.5h6.253c1.27 0 2.264 0 3.066.06.816.062 1.493.19 2.111.479a5.75 5.75 0 012.781 2.78c.289.62.417 1.296.478 2.112.061.801.061 1.796.061 3.066V14a3.75 3.75 0 01-3.166 3.705c-.137.764-.401 1.416-.932 1.947-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116H8.6c-1.203 0-2.04.001-2.788-.343-.748-.344-1.293-.98-2.075-1.894l-.103-.12-.857-1-.033-.038c-.77-.9-1.395-1.628-1.82-2.272C.481 14.413.2 13.758.2 13c0-.758.28-1.412.723-2.083.426-.644 1.05-1.372 1.821-2.272l.033-.038.857-1 .103-.12c.782-.914 1.327-1.55 2.075-1.894C6.56 5.25 7.398 5.25 8.6 5.25h5.454c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v2.11c0 .775 0 1.464-.021 2.074A2.25 2.25 0 0022.25 14v-3.222c0-1.307 0-2.245-.056-2.984-.056-.73-.162-1.204-.342-1.59a4.25 4.25 0 00-2.056-2.056c-.386-.18-.86-.286-1.59-.342zm-16.03 10.45c.367.557.93 1.214 1.74 2.16l.858 1c.928 1.084 1.253 1.438 1.666 1.628.412.19.893.206 2.32.206H14c1.435 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.399.101-.755.103-1.757.103-3.192v-2c0-1.435-.002-2.436-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.754-.101-1.755-.103-3.191-.103H8.76c-1.427 0-1.908.016-2.32.206-.413.19-.738.544-1.666 1.627l-.858 1c-.81.947-1.373 1.604-1.74 2.16-.356.54-.475.905-.475 1.257 0 .352.12.718.475 1.257zM7.75 13a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM9 10.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTags;
