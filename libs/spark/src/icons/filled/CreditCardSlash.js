import * as React from 'react';

function SvgCreditCardSlash(props) {
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
        fillRule="evenodd"
        d="M2.53 1.47a.75.75 0 00-1.06 1.06l1.39 1.39a3.75 3.75 0 00-1.201 1.378c-.36.704-.398 1.54-.407 2.646a.757.757 0 000 .102c-.002.232-.002.483-.002.752v6.434c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 001.638 1.64c.445.226.925.32 1.471.365.531.043 1.187.043 2 .043H17.31c.942 0 1.688 0 2.295-.084l1.864 1.864a.75.75 0 001.061-1.06l-2.143-2.144L8.53 7.47 4.674 3.613 2.53 1.47zm.465 4.509a2.25 2.25 0 01.954-.969l2.24 2.24H2.768c.027-.669.094-1.01.227-1.271zM17.2 4.75c.852 0 1.447 0 1.91.038.453.038.714.107.911.207.424.216.768.56.984.984.133.262.2.602.227 1.271H13a.75.75 0 000 1.5h8.25V17a.75.75 0 001.5 0V8.798c0-.27 0-.52-.002-.752a.775.775 0 000-.102c-.009-1.107-.048-1.942-.407-2.646a3.75 3.75 0 00-1.639-1.64c-.444-.225-.924-.32-1.47-.365-.532-.043-1.187-.043-2-.043H9a.75.75 0 000 1.5h8.2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCreditCardSlash;
