import * as React from 'react';

function SvgCutlery3(props) {
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
        d="M20.5 17c0 2.21-1.843 4-3.5 4s-3.5-1.79-3.5-4 1.843-4 3.5-4 3.5 1.79 3.5 4z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M4 2.25a.75.75 0 01.75.75v4.86c0 .537 0 .89.026 1.164.025.259.067.393.122.495.055.103.143.213.345.377.214.173.507.37.954.667l.053.036V3a.75.75 0 011.5 0v7.599l.053-.036c.447-.298.74-.494.954-.667.202-.164.29-.274.345-.377.055-.102.098-.236.122-.495.025-.275.026-.627.026-1.165V3a.75.75 0 011.5 0v4.892c0 .496 0 .919-.033 1.271-.035.376-.11.725-.292 1.064-.182.34-.43.596-.723.834a14.64 14.64 0 01-1.04.732l-.027.019-.885.59V21a.75.75 0 01-1.5 0v-8.599l-.885-.59-.027-.018a14.64 14.64 0 01-1.04-.732c-.292-.238-.54-.494-.723-.834-.181-.34-.257-.688-.292-1.064a14.64 14.64 0 01-.033-1.271V3A.75.75 0 014 2.25zm13 0a.75.75 0 01.75.75v9.34c.816.192 1.58.681 2.173 1.323.78.845 1.327 2.022 1.327 3.337 0 1.315-.547 2.492-1.327 3.337-.771.835-1.834 1.413-2.923 1.413-1.09 0-2.152-.578-2.922-1.413-.78-.845-1.328-2.022-1.328-3.337 0-1.315.547-2.492 1.328-3.337.592-.642 1.356-1.131 2.172-1.324V3a.75.75 0 01.75-.75zm0 11.5c-.568 0-1.255.318-1.82.93-.556.602-.93 1.426-.93 2.32 0 .894.374 1.718.93 2.32.565.612 1.252.93 1.82.93.568 0 1.255-.318 1.82-.93.556-.602.93-1.426.93-2.32 0-.894-.374-1.718-.93-2.32-.565-.612-1.252-.93-1.82-.93z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCutlery3;
