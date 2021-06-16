import * as React from 'react';

function SvgPinSlash(props) {
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
        d="M8.354 3.644c2.154-1.155 4.898-1.191 7.09-.104 2.154 1.068 3.806 3.235 3.806 6.608 0 1.253-.287 2.445-.758 3.56-.067.158-.137.315-.21.47a.75.75 0 001.353.645c.083-.175.163-.352.239-.531.535-1.268.876-2.658.876-4.144 0-3.946-1.978-6.632-4.64-7.952-2.623-1.301-5.88-1.26-8.464.126a.75.75 0 10.708 1.322zM3.53 2.47a.75.75 0 00-1.06 1.06l1.936 1.936c-.733 1.29-1.156 2.857-1.156 4.682 0 3.866 2.3 7.09 4.41 9.246l.047.048c.667.682 1.25 1.278 1.886 1.685.697.447 1.437.661 2.407.661s1.711-.214 2.408-.661c.636-.408 1.219-1.003 1.886-1.686l.047-.048c.318-.325.638-.671.952-1.039l3.177 3.176a.75.75 0 101.06-1.06l-3.762-3.762L5.886 4.826 3.53 2.47zm1.22 7.678c0-1.403.286-2.59.766-3.572L16.229 17.29c-.315.373-.638.725-.96 1.054-.728.744-1.194 1.215-1.67 1.52-.432.277-.886.424-1.599.424-.712 0-1.166-.147-1.598-.424-.476-.305-.942-.775-1.67-1.519-2.017-2.061-3.982-4.923-3.982-8.197zm6.5-2.27a2.25 2.25 0 012.872 2.872.75.75 0 101.414.5 3.75 3.75 0 00-4.786-4.786.75.75 0 10.5 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPinSlash;
