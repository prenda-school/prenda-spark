import * as React from 'react';

function SvgInboxIn(props) {
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
        d="M9.307 21h5.386c1.736 0 2.604 0 3.316-.283a4 4 0 001.992-1.728c.381-.665.504-1.524.75-3.243.079-.555.119-.833.048-1.053a1 1 0 00-.514-.592C20.078 14 19.797 14 19.236 14h-1.433c-.715 0-1.072 0-1.393.112a1.97 1.97 0 00-.544.292c-.271.204-.47.501-.866 1.096-.396.595-.595.892-.866 1.096a1.976 1.976 0 01-.545.292c-.32.112-.677.112-1.392.112h-.394c-.715 0-1.072 0-1.393-.112a1.999 1.999 0 01-.545-.292c-.27-.204-.469-.501-.865-1.096-.396-.595-.595-.892-.865-1.096a2 2 0 00-.545-.292C7.27 14 6.912 14 6.197 14H4.764c-.561 0-.842 0-1.05.101a1 1 0 00-.513.592c-.07.22-.03.498.048 1.053.246 1.719.369 2.578.75 3.243a4 4 0 001.992 1.728C6.703 21 7.571 21 9.307 21z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12.75 2a.75.75 0 00-1.5 0v8.19L9.53 8.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.72 1.72V2zM8.579 3.25h.171a.75.75 0 010 1.5h-.127c-.768 0-1.278.001-1.666.048-.368.044-.541.12-.665.217-.123.096-.24.246-.372.592-.139.365-.264.86-.45 1.605l-1.209 4.835c-.155.623-.223.896-.27 1.17l-.005.033h2.318c.61 0 1.09-.001 1.533.154.269.094.522.23.75.401.374.283.64.683.978 1.19l.059.089c.426.64.548.804.693.914.104.078.219.14.34.182.173.06.378.07 1.146.07h.394c.768 0 .973-.01 1.145-.07.122-.043.237-.104.34-.182.146-.11.268-.275.694-.914l.06-.09c.337-.506.603-.906.978-1.189a2.75 2.75 0 01.749-.401c.443-.155.923-.155 1.533-.154h2.317l-.005-.034c-.046-.273-.114-.546-.27-1.169L18.53 7.212c-.187-.746-.311-1.24-.45-1.605-.132-.346-.249-.496-.372-.592-.124-.097-.297-.173-.665-.217-.388-.047-.898-.048-1.666-.048h-.127a.75.75 0 010-1.5h.171c.712 0 1.313 0 1.8.058.518.062.99.197 1.41.524.419.328.665.754.85 1.24.175.46.32 1.042.493 1.733l.011.043 1.209 4.836.008.033c.145.58.228.912.285 1.25a8.75 8.75 0 01.104 2.01c-.022.342-.07.681-.155 1.273l-.005.034-.018.132c-.17 1.182-.277 1.938-.566 2.567a4.75 4.75 0 01-2.964 2.57c-.663.197-1.427.197-2.62.197H8.737c-1.194 0-1.958 0-2.621-.197a4.75 4.75 0 01-2.964-2.57c-.29-.63-.397-1.385-.565-2.567l-.02-.132-.004-.034c-.085-.592-.133-.931-.155-1.273a8.751 8.751 0 01.104-2.01c.057-.338.14-.67.285-1.25l.008-.034 1.209-4.835.01-.043c.173-.69.319-1.273.494-1.732.185-.487.431-.913.85-1.24.42-.328.892-.463 1.41-.525.487-.058 1.088-.058 1.8-.058zM3.906 14.882a7.18 7.18 0 01-.007-.132h2.298c.768 0 .973.01 1.145.07.122.043.237.104.34.182.146.11.268.275.694.914l.06.089c.337.508.603.907.978 1.19.227.172.48.307.749.401.443.155.923.155 1.533.154h.608c.61 0 1.09.001 1.533-.154a2.75 2.75 0 00.75-.401c.374-.283.64-.683.978-1.19l.059-.089c.426-.64.548-.804.693-.914.104-.078.219-.14.34-.182.173-.06.378-.07 1.146-.07H20.1a7.27 7.27 0 01-.007.132c-.018.276-.057.555-.148 1.19-.194 1.36-.276 1.88-.462 2.285a3.25 3.25 0 01-2.028 1.759c-.427.126-.954.134-2.327.134H8.871c-1.373 0-1.9-.008-2.327-.134a3.25 3.25 0 01-2.028-1.76c-.186-.404-.268-.925-.462-2.284-.091-.635-.13-.914-.148-1.19z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgInboxIn;
