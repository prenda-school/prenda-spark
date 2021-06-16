import * as React from 'react';

function SvgComment2Alert(props) {
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
        d="M12 21a9 9 0 10-9-9c0 1.091.265 2.183.601 3.13.527 1.479.79 2.219.816 2.639.03.472.008.65-.136 1.1-.128.402-.438.866-1.056 1.794L3 21h9z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M12 3.75A8.25 8.25 0 003.75 12c0 .977.238 1.98.558 2.878l.005.014c.259.728.46 1.292.598 1.726.135.422.235.792.255 1.104.015.25.02.467-.008.697-.028.23-.087.44-.163.679-.09.284-.235.56-.416.859-.056.091-.117.189-.184.293H12a8.25 8.25 0 100-16.5zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75H3a.75.75 0 01-.624-1.166l.225-.337c.313-.47.534-.802.694-1.067.16-.264.234-.421.271-.538a2.24 2.24 0 00.104-.407 2.24 2.24 0 00-.001-.419c-.007-.108-.052-.319-.187-.741-.13-.408-.322-.95-.587-1.694-.354-.995-.645-2.175-.645-3.381zM13 16a1 1 0 11-2 0 1 1 0 012 0zm-.25-8a.75.75 0 00-1.5 0v5a.75.75 0 001.5 0V8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComment2Alert;
