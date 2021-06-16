import * as React from 'react';

function SvgCallAdd(props) {
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
        d="M5.462 2.25h.125c.332 0 .59 0 .83.042A2.75 2.75 0 018.45 3.879c.099.222.161.472.242.795l.014.058.414 1.654.009.037c.14.56.259 1.035.316 1.438.06.43.063.839-.074 1.26-.137.42-.38.75-.682 1.061-.283.292-.66.606-1.102.977l-.029.024-1.612 1.348a13.897 13.897 0 005.523 5.523l1.348-1.612.024-.03c.37-.442.685-.818.977-1.102.31-.301.64-.544 1.061-.68.42-.138.83-.136 1.26-.075.402.057.878.176 1.438.316l.036.01 1.655.413.058.014c.322.08.573.143.794.242a2.75 2.75 0 011.588 2.033c.042.24.042.498.042.83v.125c0 .383 0 .685-.066.983-.242 1.084-1.246 1.994-2.348 2.13-.302.037-.562.012-.885-.02l-.047-.004c-2.64-.258-5.016-.917-7.085-1.957-3.074-1.545-5.445-3.915-6.99-6.99-1.039-2.069-1.698-4.444-1.956-7.084L2.37 5.55c-.032-.323-.058-.583-.02-.885.135-1.103 1.046-2.106 2.13-2.348.297-.067.6-.066.983-.066zM17.75 4a.75.75 0 00-1.5 0v2.25H14a.75.75 0 000 1.5h2.25V10a.75.75 0 001.5 0V7.75H20a.75.75 0 000-1.5h-2.25V4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCallAdd;
