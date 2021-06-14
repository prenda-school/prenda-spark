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
        fill={props.fillColor || '#F0F1F2'}
        d="M5 9c0-2.828 0-4.243.879-5.121C6.757 3 8.172 3 11 3h1.333c.623 0 .935 0 1.167.134a1 1 0 01.366.366c.134.232.134.544.134 1.167 0 1.246 0 1.869.268 2.333a2 2 0 00.732.732C15.464 8 16.087 8 17.333 8c.623 0 .935 0 1.167.134a1 1 0 01.366.366c.134.232.134.544.134 1.167V13H5V9z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M13.25 3.753a77.93 77.93 0 00-.735-.003H11c-1.435 0-2.437.002-3.192.103-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4C5.752 6.562 5.75 7.564 5.75 9v3.25h12.5V9.485c0-.283 0-.526-.003-.735h-.299c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.725-.456-.456-.642-1.023-.726-1.65-.08-.595-.08-1.344-.08-2.243v-.299zm4.767 3.497c-.174-.332-.5-.673-1.305-1.477l-.485-.485c-.804-.805-1.145-1.131-1.477-1.305V4c0 .964.002 1.612.066 2.095.063.461.17.659.3.789.13.13.328.237.79.3.482.064 1.13.066 2.094.066h.017zm1.733 2.235v2.765H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h1.25V8.945c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.982.867-.116 1.97-.116 3.337-.116h1.712c1.088 0 1.844-.001 2.535.285.692.287 1.226.822 1.995 1.591l.1.101.486.485.1.101c.77.769 1.305 1.303 1.591 1.995.287.69.287 1.447.286 2.535v.142zM6 15.25a.75.75 0 01.75.75v3a.75.75 0 11-1.5 0v-3a.75.75 0 01.75-.75zm4.75.75a.75.75 0 00-1.5 0v5a.75.75 0 101.5 0v-5zm3.25-.75a.75.75 0 01.75.75v5a.75.75 0 11-1.5 0v-5a.75.75 0 01.75-.75zm4.75.75a.75.75 0 00-1.5 0v3a.75.75 0 101.5 0v-3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFileShredder;
