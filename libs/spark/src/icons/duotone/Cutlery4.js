import * as React from 'react';

function SvgCutlery4(props) {
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
        d="M15.97 3.243L15 3v12l1.789-.894c1.076-.538 1.613-.807 1.912-1.29.299-.484.299-1.085.299-2.288V7.123c0-1.5 0-2.25-.424-2.792-.423-.543-1.15-.725-2.606-1.088z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M15.182 2.272A.75.75 0 0014.25 3v18a.75.75 0 001.5 0v-5.537l1.374-.687.033-.016c.51-.255.943-.471 1.282-.687.361-.23.67-.492.9-.863.23-.372.326-.766.37-1.191.04-.4.04-.884.04-1.454V7.079c0-.712.001-1.313-.057-1.8-.062-.518-.197-.99-.524-1.41-.328-.419-.754-.665-1.241-.85-.459-.175-1.041-.32-1.732-.493l-.043-.011-.97-.243zm1.271 11.163l-.703.351V3.962l.038.01c.745.185 1.24.31 1.605.45.346.131.496.248.592.371.097.124.173.297.217.665.047.388.048.898.048 1.666v3.405c0 .617-.001 1.023-.034 1.336-.03.297-.084.446-.153.557-.069.112-.178.226-.43.386-.265.17-.628.352-1.18.628zM4.75 3a.75.75 0 10-1.5 0v4.892c0 .496 0 .919.033 1.271.035.376.11.725.292 1.064.182.34.43.597.723.834.275.223.627.457 1.04.732l.027.019.885.59V21a.75.75 0 001.5 0v-8.599l.885-.59.027-.018c.413-.275.764-.51 1.04-.732.292-.237.54-.494.723-.834.181-.34.257-.688.292-1.064.033-.352.033-.775.033-1.271V3a.75.75 0 00-1.5 0v4.86c0 .537 0 .89-.026 1.164-.025.259-.067.393-.122.495-.055.103-.143.213-.345.377-.214.173-.507.37-.954.667l-.053.036V3a.75.75 0 10-1.5 0v7.599l-.053-.036c-.447-.298-.74-.494-.954-.667-.202-.164-.29-.274-.345-.377-.055-.102-.098-.236-.122-.495-.025-.275-.026-.627-.026-1.165V3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCutlery4;