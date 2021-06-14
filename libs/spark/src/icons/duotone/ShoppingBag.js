import * as React from 'react';

function SvgShoppingBag(props) {
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
        d="M4.319 9.828c.37-3.133.555-4.699 1.563-5.686a4 4 0 01.288-.256C7.27 3 8.846 3 12 3s4.73 0 5.83.886c.1.08.196.166.288.256 1.008.987 1.193 2.553 1.563 5.686l.264 2.234c.492 4.169.738 6.253-.455 7.595C18.296 21 16.198 21 12 21s-6.296 0-7.49-1.343c-1.193-1.342-.947-3.426-.455-7.595l.264-2.234z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12 2.25h-.049c-1.535 0-2.755 0-3.726.116-.999.12-1.824.37-2.525.936a4.749 4.749 0 00-.343.304c-.643.63-.99 1.42-1.225 2.399-.23.95-.372 2.161-.552 3.686l-.006.049-.264 2.234-.007.06c-.24 2.034-.43 3.64-.402 4.902.028 1.296.284 2.36 1.049 3.22.764.86 1.79 1.24 3.075 1.419 1.25.175 2.867.175 4.915.175h.12c2.048 0 3.665 0 4.915-.175 1.284-.18 2.31-.56 3.075-1.42.764-.86 1.021-1.923 1.05-3.22.026-1.262-.163-2.867-.403-4.901l-.007-.06-.264-2.234-.006-.049c-.18-1.525-.323-2.736-.552-3.686-.236-.979-.582-1.769-1.225-2.399a4.75 4.75 0 00-.343-.304c-.701-.566-1.526-.816-2.526-.936-.97-.116-2.19-.116-3.725-.116H12zM6.641 4.47c.397-.32.91-.513 1.763-.615.87-.104 2-.105 3.596-.105 1.595 0 2.725.001 3.596.105.853.102 1.366.294 1.763.615.081.065.16.135.234.208.365.357.616.844.817 1.678.205.853.34 1.975.526 3.56l.264 2.234c.249 2.107.424 3.608.4 4.753-.025 1.124-.242 1.774-.67 2.256-.43.483-1.05.775-2.163.93-1.134.16-2.646.161-4.767.161-2.121 0-3.633-.002-4.767-.16-1.114-.156-1.733-.448-2.162-.93-.43-.483-.646-1.133-.67-2.257-.025-1.145.15-2.646.399-4.753l.264-2.234c.187-1.585.32-2.707.526-3.56.201-.834.452-1.321.817-1.678.074-.073.153-.143.234-.208zM9.751 9a2.25 2.25 0 004.5 0V7a.75.75 0 011.5 0v2a3.75 3.75 0 11-7.5 0V7a.75.75 0 011.5 0v2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgShoppingBag;
