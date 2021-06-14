import * as React from 'react';

function SvgWebcam(props) {
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
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12 2.75a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5zM4.25 9a7.75 7.75 0 1113.537 5.155c1.188.949 2.02 2.15 2.599 3.3l.034.068c.358.71.682 1.354.823 1.943.163.685.09 1.32-.313 1.976-.428.694-1.04 1.025-1.786 1.175-.667.133-1.511.133-2.49.133H7.347c-.979 0-1.823 0-2.49-.133-.746-.15-1.358-.48-1.786-1.175-.404-.655-.476-1.291-.313-1.976.14-.589.465-1.233.823-1.943l.034-.068c.58-1.15 1.411-2.351 2.598-3.3A7.721 7.721 0 014.25 9zm3.082 6.187c-1.068.794-1.833 1.862-2.377 2.943-.403.8-.643 1.287-.738 1.685-.077.322-.05.546.131.84.159.258.36.402.803.49.504.102 1.196.105 2.27.105h9.16c1.073 0 1.765-.003 2.269-.104.442-.089.644-.233.802-.49.182-.295.209-.52.132-.841-.095-.398-.335-.885-.738-1.685-.544-1.081-1.31-2.149-2.377-2.943a7.716 7.716 0 01-4.668 1.563 7.716 7.716 0 01-4.67-1.563zM12 7.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM9.25 9a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgWebcam;
