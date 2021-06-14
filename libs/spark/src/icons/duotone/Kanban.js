import * as React from 'react';

function SvgKanban(props) {
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
        d="M3.337 3.889C3 4.393 3 5.096 3 6.5v11c0 1.404 0 2.107.337 2.611a2 2 0 00.552.552C4.393 21 5.096 21 6.5 21c1.404 0 2.107 0 2.611-.337a2 2 0 00.552-.552C10 19.607 10 18.904 10 17.5v-11c0-1.404 0-2.107-.337-2.611a2 2 0 00-.552-.552C8.607 3 7.904 3 6.5 3c-1.404 0-2.107 0-2.611.337a2 2 0 00-.552.552zm11 0C14 4.393 14 5.096 14 6.5v5c0 1.405 0 2.107.337 2.611.146.218.334.406.552.552.504.337 1.207.337 2.611.337 1.404 0 2.107 0 2.611-.337.218-.146.406-.334.552-.552C21 13.607 21 12.904 21 11.5v-5c0-1.404 0-2.107-.337-2.611a2 2 0 00-.552-.552C19.607 3 18.904 3 17.5 3c-1.404 0-2.107 0-2.611.337a2 2 0 00-.552.552z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M6.5 2.25h-.038c-.67 0-1.229 0-1.681.046-.473.048-.913.153-1.309.417a2.76 2.76 0 00-.759.76c-.264.395-.369.835-.417 1.308-.046.452-.046 1.011-.046 1.68v11.077c0 .67 0 1.229.046 1.681.048.473.153.913.417 1.309.201.3.459.558.76.759.395.264.835.369 1.308.417.452.046 1.011.046 1.68.046h.077c.67 0 1.229 0 1.681-.046.473-.048.913-.153 1.309-.418.3-.2.558-.458.758-.758.265-.396.37-.835.418-1.309.046-.452.046-1.011.046-1.68V6.461c0-.67 0-1.229-.046-1.681-.048-.473-.153-.913-.418-1.309a2.75 2.75 0 00-.758-.759c-.396-.264-.836-.369-1.309-.417-.452-.046-1.011-.046-1.68-.046H6.5zM4.306 3.96c.108-.072.272-.136.627-.172.367-.037.85-.038 1.567-.038.718 0 1.2 0 1.567.038.355.036.519.1.627.173.137.09.254.208.345.345.073.108.137.272.173.627.037.367.038.85.038 1.567v11c0 .718 0 1.2-.038 1.567-.036.355-.1.519-.173.628a1.251 1.251 0 01-.345.344c-.108.073-.272.137-.627.173-.367.037-.85.038-1.567.038-.718 0-1.2 0-1.567-.038-.355-.036-.519-.1-.627-.173a1.251 1.251 0 01-.345-.345c-.073-.108-.137-.272-.173-.627-.037-.367-.038-.85-.038-1.567v-11c0-.718 0-1.2.038-1.567.036-.355.1-.519.173-.627a1.25 1.25 0 01.345-.345zM17.5 2.25h-.038c-.67 0-1.229 0-1.681.046-.474.048-.913.153-1.309.417-.3.201-.558.459-.758.76-.265.395-.37.835-.418 1.308-.046.452-.046 1.011-.046 1.68v5.077c0 .67 0 1.229.046 1.681.048.474.153.913.418 1.309.2.3.458.558.758.758.396.265.835.37 1.309.418.452.046 1.011.046 1.68.046h.077c.67 0 1.229 0 1.681-.046.473-.048.913-.153 1.309-.418.3-.2.558-.458.759-.758.264-.396.369-.835.417-1.309.046-.452.046-1.011.046-1.68V6.461c0-.67 0-1.229-.046-1.681-.048-.473-.153-.913-.418-1.309-.2-.3-.458-.558-.758-.759-.396-.264-.835-.369-1.309-.417-.452-.046-1.011-.046-1.68-.046H17.5zm-2.194 1.71c.108-.072.272-.136.627-.172.367-.037.85-.038 1.567-.038.718 0 1.2 0 1.567.038.355.036.519.1.628.173.136.09.253.208.344.345.073.108.137.272.173.627.037.367.038.85.038 1.567v5c0 .718 0 1.2-.038 1.567-.036.355-.1.519-.173.627a1.25 1.25 0 01-.345.345c-.108.073-.272.137-.627.173-.367.037-.85.038-1.567.038-.718 0-1.2 0-1.567-.038-.355-.036-.519-.1-.627-.173a1.25 1.25 0 01-.345-.345c-.073-.108-.137-.272-.173-.627-.037-.367-.038-.85-.038-1.567v-5c0-.718 0-1.2.038-1.567.036-.355.1-.519.173-.627.09-.137.208-.254.345-.345z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgKanban;
