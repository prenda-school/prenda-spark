import * as React from 'react';

function SvgFilmTape(props) {
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
        d="M3.402 4.5C3 5.196 3 6.13 3 8v8c0 1.87 0 2.804.402 3.5A3 3 0 004.5 20.598C5.196 21 6.13 21 8 21V3c-1.87 0-2.804 0-3.5.402A3 3 0 003.402 4.5zM19.5 3.402C18.804 3 17.87 3 16 3v18c1.87 0 2.804 0 3.5-.402a3 3 0 001.098-1.098C21 18.804 21 17.87 21 16V8c0-1.87 0-2.804-.402-3.5A3 3 0 0019.5 3.402z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M9 2.25h-.055l-.899.001a.764.764 0 00-.1.001c-.918.006-1.693.028-2.338.115-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.049.36-.077.762-.094 1.206a.751.751 0 00-.01.327c-.013.541-.013 1.142-.013 1.804v6.11c0 .662 0 1.263.013 1.804a.754.754 0 00.01.327c.017.444.045.845.094 1.206.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.645.086 1.42.108 2.338.114a.817.817 0 00.1 0c.286.002.586.002.9.002h6.109l.899-.001a.783.783 0 00.1 0c.918-.007 1.693-.029 2.338-.115.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.048-.36.076-.762.093-1.206a.754.754 0 00.01-.327c.013-.541.013-1.142.013-1.804v-6.11c0-.663 0-1.263-.013-1.804a.752.752 0 00-.01-.327 12.69 12.69 0 00-.093-1.206c-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.645-.087-1.42-.11-2.338-.115a.758.758 0 00-.1 0c-.286-.002-.586-.002-.9-.002H9zm-5.193 15.5c.012.156.028.303.046.442.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.4.054.872.08 1.441.092V17.75H3.807zm3.443-1.5H3.754c-.004-.376-.004-.791-.004-1.25v-2.25h3.5v3.5zm1.5.75v3.25h6.5v-7.5h-6.5V17zm11.5-2c0 .459 0 .874-.004 1.25H16.75v-3.5h3.5V15zm-.057 2.75H16.75v2.489c.569-.012 1.04-.038 1.442-.092.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4a8.31 8.31 0 00.046-.441zm0-11.5a8.306 8.306 0 00-.046-.442c-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.4-.054-.872-.08-1.441-.092V6.25h3.443zM15.25 7V3.75h-6.5v7.5h6.5V7zm1.5.75h3.496c.004.376.004.791.004 1.25v2.25h-3.5v-3.5zM3.75 9c0-.459 0-.874.004-1.25H7.25v3.5h-3.5V9zm.057-2.75H7.25V3.761c-.569.012-1.04.038-1.442.092-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4a8.274 8.274 0 00-.046.441z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFilmTape;
