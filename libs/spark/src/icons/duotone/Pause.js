import * as React from 'react';

function SvgPause(props) {
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
        d="M4.152 5.235C4 5.602 4 6.068 4 7v10c0 .932 0 1.398.152 1.765a2 2 0 001.083 1.083C5.602 20 6.068 20 7 20c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083C10 18.398 10 17.932 10 17V7c0-.932 0-1.398-.152-1.765a2 2 0 00-1.083-1.083C8.398 4 7.932 4 7 4c-.932 0-1.398 0-1.765.152a2 2 0 00-1.083 1.083zm10 0C14 5.602 14 6.068 14 7v10c0 .932 0 1.398.152 1.765a2 2 0 001.083 1.083C15.602 20 16.068 20 17 20c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083C20 18.398 20 17.932 20 17V7c0-.932 0-1.398-.152-1.765a2 2 0 00-1.083-1.083C18.398 4 17.932 4 17 4c-.932 0-1.398 0-1.765.152a2 2 0 00-1.083 1.083z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M7 3.25h-.025c-.445 0-.816 0-1.12.02a2.823 2.823 0 00-.907.19 2.75 2.75 0 00-1.489 1.488c-.12.29-.167.59-.188.907-.021.304-.021.675-.021 1.12v10.05c0 .445 0 .816.02 1.12.022.317.069.617.19.907a2.75 2.75 0 001.488 1.489c.29.12.59.167.907.188.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02.317-.022.617-.069.907-.19a2.75 2.75 0 001.489-1.488c.12-.29.167-.59.188-.907.021-.304.021-.675.021-1.12V6.975c0-.445 0-.816-.02-1.12a2.822 2.822 0 00-.19-.907 2.75 2.75 0 00-1.488-1.489c-.29-.12-.59-.167-.907-.188-.304-.021-.675-.021-1.12-.021H7zM5.522 4.845c.077-.032.194-.061.435-.078A17.09 17.09 0 017 4.75c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043v10c0 .476 0 .796-.017 1.043-.017.241-.046.358-.078.435a1.25 1.25 0 01-.677.677c-.077.032-.194.061-.435.078A17.07 17.07 0 017 19.25c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078a1.25 1.25 0 01-.677-.677c-.032-.077-.061-.194-.078-.435A17.091 17.091 0 014.75 17V7c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677zM17 3.25h-.025c-.445 0-.816 0-1.12.02a2.823 2.823 0 00-.907.19 2.75 2.75 0 00-1.489 1.488c-.12.29-.167.59-.188.907-.021.304-.021.675-.021 1.12v10.05c0 .445 0 .816.02 1.12.022.317.069.617.19.907a2.75 2.75 0 001.488 1.489c.29.12.59.167.907.188.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02.317-.022.617-.069.907-.19a2.75 2.75 0 001.489-1.488c.12-.29.167-.59.188-.907.021-.304.021-.675.021-1.12V6.975c0-.445 0-.816-.02-1.12a2.822 2.822 0 00-.19-.907 2.75 2.75 0 00-1.488-1.489c-.29-.12-.59-.167-.907-.188-.304-.021-.675-.021-1.12-.021H17zm-1.478 1.595c.077-.032.194-.061.435-.078.247-.017.567-.017 1.043-.017s.796 0 1.043.017c.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043v10c0 .476 0 .796-.017 1.043-.017.241-.046.358-.078.435a1.25 1.25 0 01-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017s-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 01-.677-.677c-.032-.077-.061-.194-.078-.435A17.073 17.073 0 0114.75 17V7c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPause;
