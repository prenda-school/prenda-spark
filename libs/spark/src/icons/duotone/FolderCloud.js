import * as React from 'react';

function SvgFolderCloud(props) {
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
        d="M2.102 5.223C2 5.605 2 6.07 2 7v7c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14v-2c0-2.828 0-4.243-.879-5.121-.878-.88-2.293-.88-5.121-.88h-.879c-.865 0-1.298 0-1.7-.114a2.999 2.999 0 01-.637-.263c-.366-.204-.672-.51-1.284-1.122-.612-.612-.918-.918-1.284-1.122a3 3 0 00-.636-.263C9.177 3 8.744 3 7.879 3H6c-.93 0-1.395 0-1.776.102a3 3 0 00-2.122 2.121zM10 16a3 3 0 112.921-3.685A2 2 0 1114 16h-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M6 2.25h-.116c-.818 0-1.376 0-1.855.128a3.75 3.75 0 00-2.651 2.651c-.128.479-.128 1.037-.128 1.855v7.171c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.601 1.36.86 2.26.981.867.117 1.97.117 3.337.117h8.11c1.367 0 2.47 0 3.337-.117.9-.12 1.658-.38 2.26-.982.602-.601.86-1.36.982-2.26.116-.866.116-1.969.116-3.336v-2.11c0-1.368 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.982-.867-.116-1.97-.116-3.337-.116h-.934c-.907 0-1.216-.007-1.495-.086a2.249 2.249 0 01-.477-.198c-.254-.141-.477-.355-1.119-.996l-.07-.072c-.544-.543-.92-.92-1.38-1.175a3.751 3.751 0 00-.795-.33C9.28 2.25 8.748 2.25 7.98 2.25H6zM4.418 3.827c.262-.07.604-.077 1.582-.077h1.879c.907 0 1.216.007 1.495.086.166.047.326.114.477.198.254.14.477.354 1.119.996l.07.071c.544.544.92.92 1.38 1.176.251.14.518.25.795.33.505.143 1.037.143 1.806.143H16c1.436 0 2.437.001 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.399.102.755.103 1.757.103 3.192v2c0 1.435-.002 2.436-.103 3.192-.099.733-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.754.101-1.755.103-3.191.103H8c-1.435 0-2.436-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.666-.556-1.4-.101-.755-.103-1.756-.103-3.191V7c0-.978.006-1.32.077-1.582a2.25 2.25 0 011.59-1.591zM7.75 13a2.25 2.25 0 014.441-.514.75.75 0 001.136.46A1.25 1.25 0 1114 15.25h-4a2.25 2.25 0 01-2.25-2.249zM10 9.25a3.75 3.75 0 000 7.5h4a2.75 2.75 0 10-.644-5.424A3.75 3.75 0 0010 9.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFolderCloud;
