import * as React from 'react';

function SvgWalletPlus(props) {
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
        d="M22 15v-2c0-2.828 0-4.243-.879-5.121C20.243 7 18.828 7 16 7H2v8c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h8c2.828 0 4.243 0 5.121-.879C22 19.243 22 17.828 22 15z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M14 3.75c.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788.046.346.06.776.064 1.345H4a1.25 1.25 0 110-2.5h10zM1.25 5A2.75 2.75 0 014 2.25h10.052c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.06.447.075.98.079 1.598.227.016.441.036.643.064.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.086.645.108 1.42.114 2.338a.814.814 0 01.002.054v4c0 .018 0 .037-.002.054-.006.918-.028 1.693-.114 2.338-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337V5zm20 10v.25H20a1.25 1.25 0 110-2.5h1.25V15zm-.011-3.75H20a2.75 2.75 0 100 5.5h1.239c-.012.569-.038 1.04-.092 1.442-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103H8c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191V7.45c.375.192.8.3 1.25.3h12c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.054.4.08.872.092 1.441zM6.75 14a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgWalletPlus;
