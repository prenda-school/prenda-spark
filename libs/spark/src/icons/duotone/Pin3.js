import * as React from 'react';

function SvgPin3(props) {
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
        d="M6 8.519c0-8.692 12-8.692 12 0 0 2.273-1.014 4.28-2.208 5.855-.228.3-.434.572-.633.816C18.571 15.617 21 16.714 21 18c0 1.657-4.03 3-9 3s-9-1.343-9-3c0-1.286 2.429-2.383 5.84-2.81-.197-.243-.404-.516-.632-.816C7.014 12.799 6 10.792 6 8.519zM14 8a2 2 0 11-4 0 2 2 0 014 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M6.75 8.519c0-1.99.682-3.419 1.646-4.35C9.369 3.23 10.677 2.75 12 2.75c1.322 0 2.63.479 3.604 1.42.964.93 1.646 2.359 1.646 4.349 0 2.048-.915 3.898-2.056 5.402-.624.822-1.004 1.313-1.443 1.63-.39.281-.87.453-1.75.453-.881 0-1.362-.172-1.751-.453-.44-.317-.82-.808-1.444-1.63-1.14-1.504-2.056-3.354-2.056-5.402zm12 0c0-2.356-.818-4.187-2.104-5.429C15.369 1.857 13.677 1.25 12 1.25c-1.678 0-3.37.607-4.646 1.84C6.068 4.332 5.25 6.163 5.25 8.52c0 2.498 1.113 4.662 2.36 6.308l.049.063c.56.74 1.071 1.414 1.712 1.877.71.512 1.523.737 2.63.737 1.106 0 1.919-.225 2.628-.737.64-.463 1.152-1.137 1.712-1.877l.048-.063c1.248-1.646 2.361-3.81 2.361-6.308zM12 6.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM9.25 8a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zm-3.562 7.547a.75.75 0 01-.39.987c-.577.251-.988.516-1.243.765-.254.247-.305.427-.305.537 0 .125.07.35.437.655.361.3.93.605 1.698.875 1.53.537 3.691.884 6.115.884 2.424 0 4.586-.347 6.115-.884.768-.27 1.337-.575 1.698-.875.366-.305.437-.53.437-.655 0-.11-.051-.29-.305-.537-.255-.25-.666-.514-1.244-.765a.75.75 0 11.598-1.375c.673.292 1.262.645 1.694 1.066.434.423.757.966.757 1.61 0 .749-.433 1.356-.978 1.809-.549.457-1.299.834-2.16 1.137-1.727.607-4.065.969-6.612.969-2.547 0-4.885-.362-6.613-.97-.86-.302-1.61-.68-2.16-1.136-.544-.453-.977-1.06-.977-1.808 0-.645.323-1.188.757-1.61.432-.422 1.021-.775 1.694-1.067a.75.75 0 01.987.388z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPin3;
