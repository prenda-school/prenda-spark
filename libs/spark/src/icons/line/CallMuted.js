import * as React from 'react';

function SvgCallMuted(props) {
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
        d="M5.527 2.25h-.065c-.383 0-.686 0-.983.066-1.084.242-1.995 1.246-2.13 2.348-.038.302-.012.562.02.885l.004.047c.258 2.64.917 5.016 1.957 7.085 1.544 3.074 3.915 5.444 6.99 6.99 2.068 1.039 4.444 1.698 7.084 1.956l.047.004c.323.032.583.058.885.02 1.102-.135 2.106-1.046 2.348-2.13.066-.297.066-.6.066-.983v-.125c0-.332 0-.59-.042-.83a2.75 2.75 0 00-1.587-2.033c-.222-.099-.473-.161-.795-.242l-.058-.014-1.655-.414-.036-.009c-.56-.14-1.036-.259-1.439-.316-.428-.06-.838-.063-1.259.074-.42.137-.75.38-1.061.682-.292.283-.607.659-.977 1.102l-.024.029-1.348 1.612a13.897 13.897 0 01-5.523-5.523l1.612-1.348.029-.024c.443-.37.819-.685 1.102-.977.302-.31.545-.64.682-1.061.137-.42.135-.83.074-1.26-.057-.402-.176-.878-.316-1.438l-.01-.036-.413-1.655-.014-.058c-.08-.322-.143-.573-.242-.794a2.75 2.75 0 00-2.034-1.588c-.238-.042-.497-.042-.829-.042h-.06zm13.022 17.884c-2.11-.206-4.01-.682-5.691-1.402l1.11-1.328c.4-.48.665-.795.895-1.017.216-.21.355-.29.48-.331.127-.041.286-.058.585-.016.316.045.715.144 1.322.296l1.654.413c.408.102.52.133.605.171.38.17.65.515.722.924.016.092.019.208.019.629 0 .478-.004.605-.03.722-.104.464-.595.91-1.067.968-.121.014-.217.009-.604-.03zM6.596 10.032l-1.328 1.11c-.72-1.68-1.196-3.582-1.402-5.691-.038-.387-.044-.483-.029-.604.059-.473.504-.963.969-1.067.116-.026.243-.03.721-.03.42 0 .537.003.629.019.409.072.755.343.924.722.038.085.069.197.17.605l.415 1.654c.151.607.25 1.006.295 1.322.042.3.025.458-.016.584-.04.126-.12.265-.33.482-.223.229-.538.493-1.018.894zM15.53 3.47a.75.75 0 00-1.06 1.06l1.97 1.97-1.97 1.97a.75.75 0 101.06 1.06l1.97-1.97 1.97 1.97a.75.75 0 001.06-1.06L18.56 6.5l1.97-1.97a.75.75 0 10-1.06-1.06L17.5 5.44l-1.97-1.97z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCallMuted;
