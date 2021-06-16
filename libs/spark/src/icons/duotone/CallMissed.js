import * as React from 'react';

function SvgCallMissed(props) {
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
        d="M6.12 18.862l-.701.439c-.303.19-.455.284-.596.344a2 2 0 01-2.22-.44c-.107-.11-.21-.255-.418-.546a3.675 3.675 0 01-.313-.479c-.345-.684-.212-1.672.302-2.241.103-.114.181-.178.338-.305 1.782-1.45 3.651-2.431 5.488-3.005A13.425 13.425 0 0112 12c1.283 0 2.632.201 4 .629 1.837.574 3.706 1.556 5.488 3.005.157.127.235.191.338.305.514.569.647 1.557.302 2.241-.069.137-.15.251-.313.479-.208.29-.311.436-.419.546a2 2 0 01-2.219.44c-.141-.06-.293-.155-.596-.344l-.701-.439c-.529-.33-.793-.495-.989-.72a2 2 0 01-.342-.556c-.113-.275-.142-.585-.2-1.206L16 12.629A13.426 13.426 0 0012 12a13.41 13.41 0 00-4 .629l-.35 3.751c-.057.62-.086.93-.199 1.206a2 2 0 01-.342.556c-.196.225-.46.39-.989.72z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M7 3.25a.75.75 0 00-.75.75v4a.75.75 0 001.5 0V5.81l.891.892.037.037c.635.635 1.165 1.165 1.642 1.529.504.384 1.036.654 1.68.654.644 0 1.176-.27 1.68-.654.477-.364 1.007-.894 1.642-1.53l.037-.036L17.03 5.03a.75.75 0 00-1.06-1.06l-1.672 1.67c-.682.682-1.14 1.139-1.528 1.434-.37.283-.586.347-.77.347-.184 0-.4-.064-.77-.347-.387-.295-.847-.752-1.528-1.434l-.892-.89H11a.75.75 0 000-1.5H7zm5 8a14.19 14.19 0 00-4.224.663c-1.931.604-3.884 1.632-5.737 3.139l-.015.012c-.147.12-.265.215-.407.372-.375.416-.589.954-.66 1.48-.07.526-.007 1.101.245 1.602.096.19.209.347.35.546l.023.03.032.046c.176.247.312.437.46.589a2.75 2.75 0 003.052.606 5.05 5.05 0 00.65-.369l.047-.03.702-.438.079-.049c.451-.282.807-.503 1.077-.814a2.75 2.75 0 00.471-.765c.157-.38.195-.798.244-1.328l.009-.093.302-3.244a12.528 12.528 0 013.3-.455c1.057 0 2.167.146 3.3.455l.302 3.245.009.092c.049.53.087.947.244 1.329.114.278.273.537.47.764.271.31.627.532 1.078.814l.08.05.7.438.048.03c.257.16.455.284.65.368a2.75 2.75 0 003.052-.606c.148-.152.284-.342.46-.589l.032-.045.023-.031c.141-.198.254-.357.35-.546.252-.5.316-1.076.245-1.602-.071-.526-.285-1.064-.66-1.48a3.256 3.256 0 00-.407-.372l-.015-.012c-1.853-1.507-3.806-2.535-5.737-3.139A14.174 14.174 0 0012 11.25zm-9.015 4.966c1.36-1.106 2.765-1.923 4.16-2.485l-.241 2.58c-.062.666-.086.843-.147.991a1.251 1.251 0 01-.214.348c-.105.12-.253.222-.82.576l-.702.439c-.326.204-.419.259-.494.291a1.25 1.25 0 01-1.387-.275c-.057-.059-.121-.145-.345-.458-.173-.242-.216-.305-.253-.38a1.275 1.275 0 01-.098-.727c.038-.281.148-.521.286-.674.06-.066.095-.096.255-.226zm14.11.094l-.24-2.58c1.395.563 2.8 1.38 4.16 2.486.16.13.195.16.255.226.138.153.248.393.286.674.038.282-.005.543-.098.727-.037.075-.08.138-.253.38-.224.313-.288.4-.345.458a1.25 1.25 0 01-1.387.275c-.075-.032-.168-.087-.494-.291l-.702-.439c-.568-.354-.715-.456-.82-.576a1.25 1.25 0 01-.214-.348c-.06-.148-.085-.325-.147-.992z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCallMissed;
