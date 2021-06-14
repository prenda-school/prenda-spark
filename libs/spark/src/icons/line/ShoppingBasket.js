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
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M9.6 3.45a.75.75 0 10-1.2-.9L5.415 6.53c-.577.141-1.084.36-1.532.704A4.75 4.75 0 002.56 8.812c-.405.78-.484 1.648-.413 2.67.07 1.002.292 2.252.575 3.836l.008.044.007.037c.204 1.144.366 2.055.567 2.778.206.745.468 1.357.91 1.881a4.75 4.75 0 001.262 1.058c.593.341 1.242.492 2.011.564.748.07 1.673.07 2.835.07h3.354c1.163 0 2.087 0 2.835-.07.769-.072 1.418-.223 2.011-.564a4.75 4.75 0 001.263-1.058c.441-.524.703-1.136.91-1.88.2-.724.362-1.635.567-2.779l.006-.037.008-.044c.283-1.585.506-2.834.576-3.836.07-1.022-.01-1.89-.414-2.67a4.751 4.751 0 00-1.321-1.578c-.448-.345-.956-.563-1.532-.704L15.6 2.55a.75.75 0 10-1.2.9l2.125 2.834c-.803-.034-1.743-.034-2.84-.034h-3.371c-1.098 0-2.038 0-2.841.034L9.6 3.45zM4.797 8.423c.381-.293.904-.477 1.802-.574.909-.098 2.097-.099 3.761-.099h3.279c1.665 0 2.852.001 3.761.1.898.096 1.421.28 1.803.573.376.29.685.658.904 1.08.221.427.31.974.248 1.876-.063.912-.27 2.081-.563 3.72-.213 1.189-.364 2.03-.543 2.678-.176.636-.363 1.02-.611 1.315a3.25 3.25 0 01-.865.724c-.334.192-.745.309-1.402.37-.67.063-1.524.064-2.732.064H10.36c-1.208 0-2.062 0-2.732-.064-.657-.061-1.068-.178-1.402-.37a3.249 3.249 0 01-.864-.724c-.248-.294-.435-.679-.611-1.315-.18-.648-.33-1.49-.543-2.678-.293-1.639-.5-2.809-.564-3.72-.062-.902.027-1.449.248-1.876a3.25 3.25 0 01.905-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgShoppingBasket;
