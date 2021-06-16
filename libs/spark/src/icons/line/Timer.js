import * as React from 'react';

function SvgTimer(props) {
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
        d="M15.947 3.863C15.05 3.751 13.784 3.75 12 3.75H9.364c-.646 0-1.103 0-1.444.016-.355.017-.496.05-.549.07A1.25 1.25 0 006.683 5.5c.022.052.099.175.338.438.23.252.553.576 1.01 1.033l2.25 2.25a.75.75 0 11-1.061 1.06L6.97 8.03l-.015-.014c-.439-.44-.787-.788-1.044-1.07-.25-.275-.475-.553-.604-.848a2.75 2.75 0 011.515-3.657c.3-.118.655-.155 1.026-.173.382-.018.875-.018 1.496-.018h2.714c1.714 0 3.073 0 4.074.124.982.123 1.892.391 2.38 1.182.155.25.268.524.336.81.214.905-.24 1.738-.848 2.519-.62.796-1.58 1.757-2.793 2.969l-.04.04-5.272 5.272c-1.262 1.262-2.156 2.158-2.71 2.87-.575.738-.616 1.07-.573 1.252.031.13.083.255.153.369.098.159.362.365 1.289.48.897.112 2.162.113 3.946.113h2.636c.646 0 1.104 0 1.445-.017.355-.017.495-.049.548-.07a1.25 1.25 0 00.689-1.662c-.023-.052-.1-.175-.338-.438-.23-.252-.553-.576-1.01-1.033l-2.25-2.25a.75.75 0 111.06-1.06l2.25 2.25.015.014c.44.44.788.788 1.045 1.07.25.275.474.553.603.848a2.75 2.75 0 01-1.515 3.657c-.3.118-.655.155-1.026.173a35.16 35.16 0 01-1.495.018h-2.714c-1.714 0-3.073 0-4.074-.124-.982-.123-1.892-.391-2.38-1.182a2.748 2.748 0 01-.336-.81c-.214-.905.24-1.738.848-2.519.62-.796 1.58-1.757 2.792-2.968l.041-.041 5.272-5.272c1.262-1.262 2.155-2.158 2.71-2.87.575-.738.615-1.07.572-1.252a1.25 1.25 0 00-.152-.369c-.099-.159-.363-.365-1.29-.48z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTimer;
