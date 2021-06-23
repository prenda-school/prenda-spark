import * as React from 'react';

function SvgPlay(props) {
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
        d="M9.437 4.318l.05.032 8.302 5.337.047.03c.549.353 1.03.662 1.367.957.356.311.698.731.698 1.326 0 .595-.342 1.015-.698 1.326-.337.295-.819.604-1.367.957l-.047.03-8.302 5.337-.05.032c-.637.41-1.186.763-1.642.969-.47.212-1.056.369-1.634.053-.577-.315-.762-.893-.838-1.403-.073-.495-.073-1.147-.073-1.905V6.604c0-.758 0-1.41.073-1.905.076-.51.261-1.088.838-1.403.578-.316 1.164-.159 1.634.054.456.206 1.005.558 1.642.968zm-2.582.302s.003-.002.013-.002l-.013.002zm.029-.001c.04.003.129.023.294.097.342.155.797.445 1.498.896l8.301 5.336c.61.393.995.642 1.238.855.115.1.162.163.18.193l.003.004-.003.004a.905.905 0 01-.18.193c-.243.213-.627.462-1.238.855l-8.301 5.336c-.701.451-1.156.74-1.498.895a1.024 1.024 0 01-.294.098 1.024 1.024 0 01-.077-.3c-.055-.372-.057-.91-.057-1.744V6.663c0-.833.002-1.373.057-1.744.027-.18.058-.264.077-.3zm-.03 14.761l.014.002c-.01 0-.014-.001-.013-.002zm.038.015c.006.005.009.01.008.01 0 0-.003-.002-.008-.01zm0-14.79c.005-.008.008-.01.008-.01s-.002.005-.008.01z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlay;