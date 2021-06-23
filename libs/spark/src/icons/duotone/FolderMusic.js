import * as React from 'react';

function SvgFolderMusic(props) {
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
        d="M2.102 5.223C2 5.605 2 6.07 2 7v7c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14v-2c0-2.828 0-4.243-.879-5.121-.878-.88-2.293-.88-5.121-.88h-.879c-.865 0-1.298 0-1.7-.114a2.999 2.999 0 01-.637-.263c-.366-.204-.672-.51-1.284-1.122-.612-.612-.918-.918-1.284-1.122a3 3 0 00-.636-.263C9.177 3 8.744 3 7.879 3H6c-.93 0-1.395 0-1.776.102a3 3 0 00-2.122 2.121zM11 16.5a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M5.884 2.25H7.98c.769 0 1.3 0 1.806.144.277.078.544.189.796.329.459.256.835.632 1.378 1.175l.071.072c.642.641.865.855 1.119.996.15.084.31.15.477.198.279.08.588.086 1.495.086h.934c1.367 0 2.47 0 3.337.116.9.121 1.658.38 2.26.982.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v2.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.601-1.36.86-2.26.981-.867.117-1.97.117-3.337.117h-8.11c-1.367 0-2.47 0-3.337-.117-.9-.12-1.658-.38-2.26-.981-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337V6.884c0-.818 0-1.376.128-1.855A3.75 3.75 0 014.03 2.378c.48-.129 1.037-.128 1.855-.128zM6 3.75c-.978 0-1.32.006-1.582.077a2.25 2.25 0 00-1.591 1.59c-.07.263-.077.605-.077 1.583v7c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.755.101 1.756.103 3.191.103h8c1.436 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.102-.755.103-1.756.103-3.191v-2c0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.4-.277-.276-.665-.456-1.4-.555-.754-.101-1.755-.103-3.191-.103h-.979c-.769 0-1.3 0-1.806-.144a3.752 3.752 0 01-.796-.33c-.459-.255-.835-.631-1.378-1.174l-.071-.072c-.642-.642-.865-.855-1.119-.996a2.25 2.25 0 00-.477-.198c-.279-.08-.588-.086-1.495-.086H6zm5 9.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm1.25-1.2a2.75 2.75 0 101.5 2.45v-3.69l.72.72a.75.75 0 101.06-1.06l-2-2a.75.75 0 00-1.28.53v3.05z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFolderMusic;