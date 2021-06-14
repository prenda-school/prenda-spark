import * as React from 'react';

function SvgFilmBoard(props) {
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
        d="M10 3.75h.075l2.1 3.5H8.441l-1.91-3.44c.906-.06 2.03-.06 3.469-.06zm-5.06.287c-.556.148-.937.364-1.238.665-.423.423-.677 1.003-.812 2.009-.023.17-.042.35-.058.539h3.893L4.941 4.037zM17.676 7.25h-3.75l-2.1-3.5H14c.574 0 1.098 0 1.578.004l2.097 3.496zM14 2.25H9.944c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.05.375-.084.784-.107 1.229a.748.748 0 00-.019.46c-.027.802-.027 1.713-.027 2.744v2.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.031 0-1.942-.027-2.744a.75.75 0 00-.02-.46 15.07 15.07 0 00-.106-1.229c-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-.673-.09-1.457-.127-2.364-.143a.75.75 0 00-.23-.003c-.565-.007-1.177-.007-1.839-.007H14zm5.425 5h1.743c-.016-.19-.035-.369-.058-.54-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812a12.691 12.691 0 00-.932-.086l2.068 3.446z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFilmBoard;
