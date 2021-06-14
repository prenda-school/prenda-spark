import * as React from 'react';

function SvgMiniplayer(props) {
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
        d="M3.172 4.172C2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172zm6.98 8.063C10 12.602 10 13.068 10 14c0 .932 0 1.398.152 1.765a2 2 0 001.083 1.083C11.602 17 12.068 17 13 17h2c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083C18 15.398 18 14.932 18 14c0-.932 0-1.398-.152-1.765a2 2 0 00-1.083-1.083C16.398 11 15.932 11 15 11h-2c-.932 0-1.398 0-1.765.152a2 2 0 00-1.083 1.083z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M10 2.25h-.056c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H10zM3.702 4.702c.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289v2c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.027-.14-2.382-.14-4.289v-2c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008zM13 10.25h-.025c-.445 0-.816 0-1.12.02a2.822 2.822 0 00-.907.19 2.75 2.75 0 00-1.489 1.488c-.12.29-.167.59-.188.907-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12.022.318.07.617.19.907a2.75 2.75 0 001.488 1.489c.29.12.59.167.907.188.304.021.675.021 1.12.021h2.05c.445 0 .816 0 1.12-.02.317-.022.617-.069.907-.19a2.75 2.75 0 001.489-1.488c.12-.29.167-.59.188-.907.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.822 2.822 0 00-.19-.907 2.75 2.75 0 00-1.488-1.489c-.29-.12-.59-.167-.907-.188-.304-.021-.675-.021-1.12-.021H13zm-1.478 1.595c.077-.032.194-.061.435-.078.247-.017.567-.017 1.043-.017h2c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 01-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017h-2c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078a1.25 1.25 0 01-.677-.677c-.032-.077-.061-.194-.078-.435A17.073 17.073 0 0110.75 14c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMiniplayer;
