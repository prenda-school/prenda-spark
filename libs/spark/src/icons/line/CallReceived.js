import * as React from 'react';

function SvgCallReceived(props) {
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
        d="M5.527 2.25h-.065c-.383 0-.686 0-.984.066-1.084.242-1.994 1.246-2.13 2.348-.037.302-.011.562.02.886l.005.046c.258 2.64.917 5.016 1.957 7.085 1.544 3.074 3.915 5.445 6.99 6.99 2.068 1.039 4.444 1.698 7.084 1.956l.047.005c.323.031.583.057.885.02 1.102-.136 2.106-1.047 2.348-2.13.066-.298.066-.6.066-.984v-.125c0-.332 0-.59-.042-.83a2.75 2.75 0 00-1.588-2.033c-.221-.099-.472-.161-.794-.242l-.058-.014-1.655-.414-.036-.009c-.56-.14-1.036-.259-1.439-.316-.429-.06-.838-.063-1.259.074-.42.137-.75.38-1.061.682-.292.283-.607.66-.977 1.102l-.024.029-1.348 1.612a13.897 13.897 0 01-5.523-5.523l1.612-1.348.029-.024c.443-.37.819-.685 1.102-.977.302-.31.545-.64.682-1.061.137-.42.135-.83.074-1.26-.057-.402-.176-.878-.316-1.438l-.01-.036-.413-1.655-.015-.058c-.08-.322-.142-.573-.241-.794a2.75 2.75 0 00-2.034-1.588c-.238-.042-.497-.042-.829-.042h-.06zm13.022 17.884c-2.11-.206-4.011-.682-5.691-1.402l1.11-1.328c.4-.48.665-.794.894-1.017.217-.21.355-.29.482-.331.126-.041.285-.058.584-.016.316.045.715.144 1.321.296l1.655.413c.408.102.52.133.605.171.38.17.65.515.722.924.016.092.019.208.019.63 0 .477-.004.604-.03.72-.104.465-.595.91-1.067.969-.121.015-.217.009-.604-.029zM6.596 10.032l-1.328 1.11c-.72-1.68-1.196-3.582-1.402-5.691-.038-.387-.044-.483-.029-.604.059-.472.504-.963.968-1.067.117-.026.243-.03.722-.03.42 0 .537.003.629.02.408.071.755.342.924.72.038.086.069.198.17.606l.414 1.655c.152.606.25 1.005.296 1.321.042.3.025.458-.016.584-.04.126-.12.265-.331.482-.222.229-.538.493-1.017.894zM21.53 3.53a.75.75 0 10-1.06-1.06L16 6.94l-1.47-1.47a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l5-5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCallReceived;
