import * as React from 'react';

function SvgRocket(props) {
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
        fillRule="evenodd"
        d="M5.5 10.5L2 8l.46-.46c1.18-1.179 1.77-1.769 2.48-1.988a3 3 0 011.286-.106C6.963 5.546 7.642 6.03 9 7l-3.5 3.5zm9.959 10.042c1.18-1.18 1.77-1.771 1.99-2.483a3 3 0 00.106-1.283c-.1-.738-.585-1.418-1.556-2.776l-3.498 3.5L15 21l.458-.458zm-1.457-9.543a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M16.342 1.25h1.707c.664 0 1.237 0 1.696.062.492.066.963.215 1.345.597s.531.854.598 1.345c.061.459.061 1.032.061 1.697v1.706c0 1.088.001 1.844-.285 2.535-.287.692-.822 1.226-1.591 1.995l-.1.1-2.795 2.794c.311.44.571.818.772 1.158.281.476.48.93.548 1.437a3.75 3.75 0 01-.132 1.604c-.15.49-.421.903-.777 1.327-.344.41-.806.871-1.376 1.441l-.024.024-.458.458a.75.75 0 01-1.14-.094l-2.017-2.823a6.287 6.287 0 01-.195.155c-.504.384-1.036.654-1.68.654-.644 0-1.176-.27-1.68-.654-.477-.364-1.007-.894-1.642-1.53l-.037-.036-1.343-1.343-.037-.037c-.635-.635-1.165-1.165-1.529-1.642-.384-.504-.653-1.036-.653-1.68 0-.644.27-1.176.653-1.68.049-.064.1-.128.155-.194L1.565 8.61a.75.75 0 01-.095-1.14l.46-.46.024-.024c.57-.57 1.03-1.03 1.44-1.374.422-.356.836-.626 1.325-.776a3.75 3.75 0 011.608-.133c.506.068.959.267 1.435.548.339.2.717.46 1.155.77l2.794-2.794.101-.1c.77-.77 1.303-1.305 1.995-1.592.691-.286 1.447-.286 2.535-.285zm-.873 12.22l3.242-3.243c.91-.91 1.209-1.227 1.367-1.609.158-.381.171-.816.171-2.103V5c0-.728-.002-1.2-.048-1.546-.044-.325-.114-.427-.172-.484-.057-.057-.159-.128-.484-.172-.347-.046-.818-.048-1.546-.048h-1.515c-1.287 0-1.722.013-2.103.171-.382.158-.699.456-1.609 1.367L8.566 8.494l-2.114 2.115c-.463.467-.796.816-1.028 1.121-.283.37-.346.586-.346.77 0 .184.063.4.346.77.295.387.752.846 1.434 1.528L7 14.94l1.47-1.47a.75.75 0 111.06 1.06L8.06 16l.141.141c.682.682 1.14 1.139 1.528 1.434.37.283.586.347.77.347.184 0 .4-.064.77-.347.388-.295.847-.752 1.528-1.434l2.672-2.671zM5.797 9.14l1.707-1.707.337-.336c-.33-.232-.601-.413-.842-.556-.387-.228-.643-.322-.873-.353a2.25 2.25 0 00-.965.08c-.222.068-.459.203-.803.492-.32.268-.69.633-1.201 1.143L5.419 9.52l.341-.342.037-.037zm9.3 10.703L13.48 17.58l2.422-2.423c.232.331.414.603.556.844.23.387.323.643.354.874a2.25 2.25 0 01-.08.962c-.068.223-.203.46-.492.804-.268.32-.633.69-1.143 1.202zM12.752 9a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm1.25-2.75a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgRocket;
