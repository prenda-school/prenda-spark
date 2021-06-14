import * as React from 'react';

function SvgCreditCardMinus(props) {
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
        d="M2 11v2c0 2.828 0 4.243.879 5.121C3.757 19 5.172 19 8 19h12v-8c0-2.828 0-4.243-.879-5.121C18.243 5 16.828 5 14 5H8c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M8 4.25h-.055c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.049.36-.077.762-.094 1.206a.751.751 0 00-.01.327c-.013.541-.013 1.142-.013 1.804v2.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116H14a.75.75 0 000-1.5H8c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.754-.103-1.756-.103-3.191v-2c0-.459 0-.874.004-1.25h16.492c.004.376.004.791.004 1.25v4a.75.75 0 001.5 0v-4.055c0-.662 0-1.263-.013-1.804a.752.752 0 00-.01-.327 12.69 12.69 0 00-.093-1.206c-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117H8zm11.193 4H2.807c.012-.156.028-.303.046-.442.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556C5.562 5.752 6.564 5.75 8 5.75h6c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.019.138.034.285.046.441zm-1.693 10a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5zm-11.5-6a.75.75 0 000 1.5h3a.75.75 0 000-1.5H6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCreditCardMinus;
