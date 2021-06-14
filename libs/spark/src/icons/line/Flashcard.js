import * as React from 'react';

function SvgFlashcard(props) {
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
        d="M11.23 5.925c-.387.295-.846.752-1.528 1.434L6.53 10.53c-.895.896-1.519 1.522-1.938 2.055-.41.52-.56.875-.59 1.213a2.25 2.25 0 000 .404c.03.338.18.693.59 1.213.419.534 1.043 1.159 1.938 2.055.896.895 1.522 1.52 2.055 1.938.52.41.875.56 1.213.59.135.012.27.012.404 0 .338-.03.694-.18 1.213-.59.534-.419 1.16-1.043 2.055-1.938l3.171-3.172c.682-.682 1.139-1.14 1.434-1.528.283-.37.347-.586.347-.77 0-.184-.064-.4-.347-.77-.295-.387-.752-.846-1.434-1.528l-2.343-2.343c-.681-.682-1.14-1.139-1.528-1.434-.37-.283-.586-.347-.77-.347-.184 0-.4.064-.77.347zm-.91-1.193c.504-.384 1.036-.654 1.68-.654.644 0 1.176.27 1.68.654.086.066.174.137.264.213l1.45-1.45.032-.032c.426-.426.794-.794 1.127-1.054.355-.278.749-.497 1.237-.532.106-.008.213-.008.32 0 .488.035.881.254 1.237.532.333.26.7.628 1.127 1.054l.031.032.032.031c.426.427.794.794 1.054 1.127.278.356.497.75.532 1.237.008.107.008.214 0 .32-.035.488-.254.882-.532 1.237-.26.333-.628.7-1.054 1.127l-.032.032-1.45 1.45c.076.09.147.178.213.264.384.504.654 1.036.654 1.68 0 .644-.27 1.176-.654 1.68-.364.477-.894 1.007-1.53 1.642l-.036.037-3.172 3.171-.034.034c-.853.854-1.541 1.542-2.153 2.023-.634.499-1.262.838-2.007.905a3.77 3.77 0 01-.672 0c-.745-.067-1.373-.406-2.006-.905-.612-.48-1.3-1.169-2.154-2.023l-.034-.034-.034-.034c-.854-.853-1.542-1.542-2.023-2.154-.499-.633-.838-1.26-.905-2.006a3.748 3.748 0 010-.672c.067-.745.406-1.373.905-2.006.48-.612 1.17-1.3 2.023-2.154l.034-.034 3.17-3.172.037-.037c.635-.635 1.165-1.165 1.642-1.529zm7.705 4.233l1.42-1.42c.467-.467.767-.77.964-1.021.186-.238.213-.35.218-.42a.76.76 0 000-.107c-.005-.07-.032-.183-.218-.42-.197-.252-.497-.555-.964-1.022-.467-.466-.77-.767-1.022-.964-.237-.186-.35-.213-.42-.218a.752.752 0 00-.107 0c-.07.005-.182.032-.42.218-.251.197-.554.498-1.021.964l-1.42 1.42.287.286.037.037 2.343 2.343.037.037.286.287zM6.47 13.47a.75.75 0 011.06 0l3 3a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFlashcard;
