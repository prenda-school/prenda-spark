import * as React from 'react';

function SvgCommentDots(props) {
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
        d="M3 8.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.28 4 6.12 4 7.8 4h8.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C21 6.28 21 7.12 21 8.8V20l-2.649-1.324c-.504-.252-.756-.378-1.02-.467a4.001 4.001 0 00-.72-.17C16.333 18 16.052 18 15.488 18H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 15.72 3 14.88 3 13.2V8.8z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M7.8 3.25h-.032c-.813 0-1.469 0-2 .043-.546.045-1.026.14-1.47.366a3.75 3.75 0 00-1.64 1.639c-.226.444-.32.924-.365 1.47-.043.531-.043 1.187-.043 2v4.464c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 001.639 1.64c.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h7.722c.583 0 .804.002 1.016.031.2.028.395.075.586.139.203.068.402.165.924.426l2.649 1.325A.75.75 0 0021.75 20V8.768c0-.813 0-1.469-.043-2-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 00-1.639-1.64c-.444-.226-.924-.32-1.47-.365-.531-.043-1.187-.043-2-.043H7.8zM4.979 4.995c.197-.1.458-.17.912-.207.462-.037 1.057-.038 1.909-.038h8.4c.852 0 1.447 0 1.91.038.453.037.714.107.912.207.423.216.767.56.983.984.1.197.17.458.207.912.037.462.038 1.057.038 1.909v9.986l-1.563-.781-.048-.024c-.459-.23-.754-.377-1.069-.483a4.747 4.747 0 00-.856-.202c-.328-.046-.659-.046-1.172-.046H7.8c-.852 0-1.447 0-1.91-.038-.453-.038-.714-.107-.911-.207a2.25 2.25 0 01-.984-.983c-.1-.198-.17-.459-.207-.913-.037-.462-.038-1.056-.038-1.909V8.8c0-.852 0-1.447.038-1.91.037-.453.107-.714.207-.911a2.25 2.25 0 01.984-.984zM8 12a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCommentDots;
