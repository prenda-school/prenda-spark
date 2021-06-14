import * as React from 'react';

function SvgFileUpload(props) {
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
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M13.25 3.753a77.93 77.93 0 00-.735-.003H11c-1.435 0-2.437.002-3.192.103-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4C5.752 6.562 5.75 7.564 5.75 9v6c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191V9.485c0-.283 0-.526-.003-.735h-.299c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.725-.456-.456-.642-1.023-.726-1.65-.08-.595-.08-1.344-.08-2.243v-.299zm1.5.23V4c0 .964.002 1.612.066 2.095.063.461.17.659.3.789.13.13.328.237.79.3.482.064 1.13.066 2.094.066h.017c-.174-.332-.5-.673-1.305-1.477l-.485-.485c-.804-.805-1.145-1.131-1.477-1.305zM12.657 2.25c1.088 0 1.844-.001 2.535.285.692.287 1.226.822 1.995 1.591l.1.101.486.485.1.101c.77.769 1.305 1.303 1.591 1.995.287.69.287 1.447.286 2.535v5.712c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.601-1.36.86-2.26.981-.867.117-1.97.117-3.337.117h-2.11c-1.367 0-2.47 0-3.337-.117-.9-.12-1.658-.38-2.26-.981-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.982.867-.116 1.97-.116 3.337-.116h1.712zm-1.187 8.22a.75.75 0 011.06 0l2.5 2.5a.75.75 0 11-1.06 1.06l-1.22-1.22V17a.75.75 0 01-1.5 0v-4.19l-1.22 1.22a.75.75 0 11-1.06-1.06l2.5-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFileUpload;
