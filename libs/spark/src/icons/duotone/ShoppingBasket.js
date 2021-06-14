import * as React from 'react';

function SvgShoppingBasket(props) {
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
        d="M3.47 15.23c-.58-3.243-.87-4.865-.243-6.072a4 4 0 011.113-1.33C5.418 7 7.066 7 10.36 7h3.28c3.294 0 4.942 0 6.02.829a4 4 0 011.113 1.329c.626 1.207.337 2.829-.243 6.072-.42 2.351-.63 3.526-1.318 4.345a4 4 0 01-1.064.89c-.927.535-2.12.535-4.509.535h-3.278c-2.388 0-3.582 0-4.51-.534a4 4 0 01-1.063-.89c-.689-.82-.899-1.995-1.318-4.346z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M9.6 3.45a.75.75 0 10-1.2-.9L5.415 6.53c-.576.141-1.084.36-1.532.704A4.75 4.75 0 002.56 8.812c-.404.78-.484 1.648-.413 2.67.07 1.002.293 2.252.575 3.836l.008.044.007.037c.204 1.144.367 2.055.567 2.778.206.745.469 1.357.91 1.881.356.424.783.781 1.262 1.058.593.341 1.243.492 2.012.564.747.07 1.672.07 2.834.07h3.355c1.162 0 2.087 0 2.835-.07.768-.072 1.418-.223 2.01-.564.48-.277.907-.634 1.264-1.058.44-.524.703-1.136.909-1.88.2-.724.363-1.635.567-2.779l.007-.037.008-.044c.282-1.584.505-2.834.575-3.836.07-1.022-.009-1.89-.413-2.67a4.749 4.749 0 00-1.322-1.578c-.448-.345-.956-.563-1.532-.704L15.6 2.55a.75.75 0 10-1.2.9l2.126 2.834a70.692 70.692 0 00-2.841-.034h-3.37c-1.098 0-2.037 0-2.84.034L9.6 3.45zM4.797 8.423c.382-.293.904-.477 1.802-.574.91-.098 2.097-.099 3.762-.099h3.278c1.665 0 2.853.001 3.762.1.898.096 1.42.28 1.802.573.377.29.685.658.904 1.08.222.427.31.974.248 1.876-.063.912-.27 2.081-.563 3.72-.212 1.189-.363 2.03-.543 2.678-.176.636-.363 1.02-.611 1.315-.244.29-.536.535-.864.724-.334.192-.746.309-1.402.37-.67.063-1.525.064-2.733.064h-3.278c-1.208 0-2.063 0-2.733-.064-.656-.061-1.068-.178-1.402-.37a3.249 3.249 0 01-.864-.724c-.248-.294-.435-.679-.611-1.315-.18-.648-.33-1.49-.543-2.678-.293-1.639-.5-2.809-.563-3.72-.063-.902.026-1.449.248-1.876a3.25 3.25 0 01.904-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgShoppingBasket;
