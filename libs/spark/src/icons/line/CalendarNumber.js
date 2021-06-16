import * as React from 'react';

function SvgCalendarNumber(props) {
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
        d="M8 .25a.75.75 0 01.75.75v1.25h4.306c.803 0 1.532 0 2.194.013V1a.75.75 0 011.5 0v1.327c.26.02.506.045.74.076 1.172.158 2.12.49 2.869 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.432.153h-2.113c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.432V8.49c0-1.382 0-2.263.246-3a4.75 4.75 0 012.995-2.994c.488-.163 1.04-.218 1.759-.237V1A.75.75 0 018 .25zm7.25 3.513V4a.75.75 0 001.5 0v-.168c.19.016.369.035.54.058 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289v2c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14h-2c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.027-.14-2.382-.14-4.289V8.647c0-1.593.01-2.206.169-2.68a3.25 3.25 0 012.048-2.049c.3-.1.657-.14 1.283-.157V4a.75.75 0 001.5 0v-.25H13c.854 0 1.597 0 2.25.013zm-.43 10.28c-.003 1.18-1.182 2.056-2.823 2.056-1.64 0-2.823-.877-2.82-2.056-.003-.909.69-1.651 1.577-1.797v-.05a1.615 1.615 0 01-1.307-1.611c-.003-1.126 1.076-1.957 2.55-1.957 1.47 0 2.55.83 2.553 1.957a1.633 1.633 0 01-1.307 1.612v.05c.874.145 1.574.887 1.577 1.796zm-4.045-.12c0 .614.49 1.047 1.222 1.047.728 0 1.222-.43 1.222-1.047 0-.629-.519-1.084-1.222-1.084-.707 0-1.222.455-1.222 1.084zm.17-3.179c0 .576.438.977 1.052.977.61 0 1.051-.401 1.051-.977 0-.564-.433-.958-1.051-.958-.621 0-1.051.39-1.051.958z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCalendarNumber;
