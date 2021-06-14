import * as React from 'react';

function SvgBookOpen(props) {
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
        d="M21 2.25h-.055c-1.954 0-3.512 0-4.954.262-1.355.247-2.592.72-3.991 1.595-1.4-.875-2.636-1.349-3.99-1.595-1.443-.262-3.001-.262-4.955-.262H3a.75.75 0 00-.75.75v12c0 .414.336.75.75.75 2.02 0 3.446.002 4.74.238 1.263.23 2.418.686 3.844 1.636a.75.75 0 00.832 0c1.426-.95 2.581-1.407 3.843-1.636 1.295-.236 2.72-.238 4.741-.238a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75zM7.74 3.988c1.163.211 2.234.615 3.51 1.42v10.26a10.506 10.506 0 00-3.24-1.156c-1.267-.23-2.624-.258-4.26-.261V3.75c1.634.003 2.862.032 3.99.237zm8.25 10.524a10.506 10.506 0 00-3.24 1.156V5.408c1.275-.805 2.347-1.209 3.51-1.42 1.128-.205 2.356-.234 3.99-.237v10.5c-1.636.003-2.992.03-4.26.261zM3 17.75a.75.75 0 000 1.5c1.974 0 3.397.124 4.678.474 1.273.347 2.448.928 3.906 1.9a.75.75 0 00.832 0c1.458-.972 2.633-1.553 3.906-1.9 1.281-.35 2.704-.474 4.678-.474a.75.75 0 000-1.5c-2.026 0-3.603.126-5.072.526-1.343.367-2.56.952-3.928 1.828-1.369-.876-2.585-1.461-3.928-1.828-1.469-.4-3.046-.526-5.072-.526z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBookOpen;
