import * as React from 'react';

function SvgFolderCross(props) {
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
        d="M2 7c0-.93 0-1.395.102-1.777a3 3 0 012.122-2.12C4.605 3 5.07 3 6 3h1.879c.865 0 1.298 0 1.7.115a3 3 0 01.637.263c.366.204.672.51 1.284 1.122.612.612.918.918 1.284 1.122.201.111.415.2.636.263.403.115.836.115 1.701.115H16c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.12v2c0 2.83 0 4.244-.879 5.122C20.243 20 18.828 20 16 20H8c-2.828 0-4.243 0-5.121-.879C2 18.243 2 16.828 2 14V7z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M6 2.25h-.116c-.818 0-1.376 0-1.855.128a3.75 3.75 0 00-2.651 2.651c-.128.479-.128 1.037-.128 1.855v7.171c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.601 1.36.86 2.26.981.867.117 1.97.117 3.337.117h8.11c1.367 0 2.47 0 3.337-.117.9-.12 1.658-.38 2.26-.981.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-2.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.982-.867-.116-1.97-.116-3.337-.116h-.934c-.907 0-1.216-.007-1.495-.086a2.252 2.252 0 01-.477-.198c-.254-.14-.477-.355-1.119-.996l-.07-.072c-.544-.543-.92-.92-1.38-1.175a3.75 3.75 0 00-.795-.33C9.28 2.25 8.748 2.25 7.98 2.25H6zM4.418 3.827c.262-.07.604-.077 1.582-.077h1.879c.907 0 1.216.007 1.495.086.166.047.326.114.477.198.254.14.477.354 1.119.996l.07.072c.544.543.92.92 1.38 1.175.251.14.518.25.795.33.505.143 1.037.143 1.806.143H16c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.19v2c0 1.436-.002 2.437-.103 3.193-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103H8c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191V7c0-.978.006-1.32.077-1.582a2.25 2.25 0 011.59-1.591zM10.03 9.97a.75.75 0 10-1.06 1.06L10.94 13l-1.97 1.97a.75.75 0 001.06 1.06L12 14.06l1.97 1.97a.75.75 0 101.06-1.06L13.06 13l1.97-1.97a.75.75 0 00-1.06-1.06L12 11.94l-1.97-1.97z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFolderCross;
