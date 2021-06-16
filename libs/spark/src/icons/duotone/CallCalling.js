import * as React from 'react';

function SvgCallCalling(props) {
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
        d="M17.431 15.608l1.655.413c.38.095.569.143.729.214a2 2 0 011.155 1.479c.03.172.03.368.03.759 0 .446 0 .67-.048.885-.173.774-.92 1.452-1.708 1.549-.219.027-.401.01-.767-.027-2.56-.25-4.845-.887-6.821-1.88-2.93-1.472-5.184-3.726-6.656-6.656-.993-1.976-1.63-4.26-1.88-6.82-.036-.366-.054-.55-.027-.768.097-.788.775-1.535 1.549-1.708C4.857 3 5.081 3 5.527 3c.391 0 .587 0 .759.03a2 2 0 011.479 1.155c.071.16.119.35.214.73l.413 1.654c.296 1.182.443 1.773.266 2.32-.178.546-.646.937-1.58 1.719L5 12.344c1.472 2.93 3.726 5.184 6.656 6.656l1.736-2.077c.782-.935 1.173-1.403 1.72-1.58.546-.178 1.137-.03 2.32.265z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M5.462 2.25h.125c.332 0 .59 0 .83.042A2.75 2.75 0 018.45 3.88c.099.22.161.472.242.794l.014.058.414 1.655.009.036c.14.56.259 1.036.316 1.439.061.428.063.838-.074 1.259-.137.42-.38.75-.681 1.061-.284.292-.66.607-1.103.977l-.029.024-1.612 1.348a13.897 13.897 0 005.523 5.523l1.348-1.612.024-.029c.37-.443.685-.819.977-1.102.31-.302.64-.545 1.061-.682.421-.136.83-.135 1.26-.074.402.057.878.176 1.438.316l.036.01 1.655.413.058.014c.323.08.573.143.795.242a2.75 2.75 0 011.587 2.034c.042.238.042.497.042.829v.125c0 .384 0 .686-.066.983-.242 1.084-1.245 1.995-2.348 2.13-.302.038-.562.012-.885-.02l-.047-.004c-2.64-.258-5.015-.917-7.085-1.957-3.074-1.544-5.444-3.915-6.989-6.99-1.04-2.068-1.7-4.444-1.957-7.084L2.37 5.55c-.032-.324-.057-.584-.02-.886.135-1.102 1.046-2.106 2.13-2.348.298-.066.6-.066.983-.066zm7.396 16.482c1.68.72 3.582 1.196 5.691 1.402.387.038.483.044.604.029.473-.058.963-.504 1.067-.968.026-.117.03-.244.03-.722 0-.42-.003-.537-.019-.629a1.25 1.25 0 00-.722-.924c-.085-.038-.197-.069-.605-.17l-1.654-.415c-.607-.151-1.006-.25-1.322-.295-.3-.042-.458-.025-.584.016-.126.04-.265.12-.481.331-.23.223-.494.537-.895 1.017l-1.11 1.328zm-7.59-7.59l1.328-1.11c.48-.4.795-.665 1.017-.894.21-.217.29-.356.331-.482.042-.126.058-.285.016-.584-.045-.316-.144-.715-.295-1.321L7.25 5.096c-.102-.408-.133-.52-.17-.605a1.25 1.25 0 00-.925-.722c-.092-.016-.208-.019-.629-.019-.478 0-.605.004-.721.03-.465.104-.91.595-.968 1.067-.015.121-.01.217.028.604.206 2.11.682 4.011 1.402 5.691zM13.25 7a.75.75 0 01.75-.75c1.027 0 1.934.639 2.547 1.294.344.367.635.78.844 1.186.201.392.359.842.359 1.27a.75.75 0 01-1.5 0c0-.09-.044-.293-.193-.584a3.852 3.852 0 00-.605-.847C14.956 8.04 14.42 7.75 14 7.75a.75.75 0 01-.75-.75zM14 3.25a.75.75 0 000 1.5c2.9 0 5.25 2.35 5.25 5.25a.75.75 0 001.5 0A6.75 6.75 0 0014 3.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCallCalling;
