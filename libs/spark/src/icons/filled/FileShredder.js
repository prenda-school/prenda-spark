import * as React from 'react';

function SvgFileShredder(props) {
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
        d="M13.25 2.252c-.187-.002-.383-.002-.593-.002h-1.712c-1.367 0-2.47 0-3.337.116-.9.122-1.658.38-2.26.982-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v3.305H3a.75.75 0 000 1.5h18a.75.75 0 000-1.5h-1.25V9.343c0-.21 0-.406-.002-.593h-1.8c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.725-.456-.456-.642-1.023-.726-1.65-.08-.595-.08-1.344-.08-2.243v-1.8zm6.359 4.998a3.053 3.053 0 00-.145-.442c-.286-.692-.82-1.226-1.59-1.995l-.101-.1-.485-.486-.101-.1c-.769-.77-1.303-1.305-1.995-1.592a3.058 3.058 0 00-.442-.144v1.61c0 .963.002 1.61.066 2.094.063.461.17.659.3.789.13.13.328.237.79.3.482.064 1.13.066 2.094.066h1.609zM6.75 16a.75.75 0 00-1.5 0v3a.75.75 0 101.5 0v-3zm4 0a.75.75 0 00-1.5 0v5a.75.75 0 101.5 0v-5zm3.25-.75a.75.75 0 01.75.75v5a.75.75 0 11-1.5 0v-5a.75.75 0 01.75-.75zm4.75.75a.75.75 0 00-1.5 0v3a.75.75 0 101.5 0v-3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFileShredder;