import * as React from 'react';

function SvgVerified(props) {
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
        d="M10.698 2.116c.621-.533.932-.799 1.302-.799s.68.266 1.302.799l1.636 1.403c.278.238.417.357.585.419.168.062.35.062.717.062H18c.943 0 1.414 0 1.707.293C20 4.586 20 5.057 20 6v1.76c0 .366 0 .55.062.717.062.168.181.307.42.585l1.402 1.636c.533.621.799.932.799 1.302s-.266.68-.799 1.302l-1.402 1.636c-.239.278-.358.417-.42.585-.062.168-.062.35-.062.717V18c0 .943 0 1.414-.293 1.707C19.414 20 18.943 20 18 20h-1.76c-.366 0-.55 0-.717.062-.168.062-.307.181-.585.42l-1.636 1.402c-.621.533-.932.799-1.302.799s-.68-.266-1.302-.799l-1.636-1.402c-.278-.239-.417-.358-.585-.42C8.309 20 8.127 20 7.76 20H5.966c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-1.767c0-.362 0-.544-.061-.71-.061-.167-.179-.306-.413-.582l-1.396-1.648c-.524-.617-.785-.926-.785-1.293 0-.367.261-.675.785-1.293L3.492 9.06c.234-.277.352-.416.413-.582.06-.167.06-.349.06-.711V6c0-.943 0-1.414.294-1.707C4.552 4 5.023 4 5.966 4H7.76c.366 0 .55 0 .717-.062.168-.062.307-.181.585-.42l1.636-1.402z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M11.187 2.685c.325-.279.517-.441.67-.543a.668.668 0 01.129-.07l.013-.005H12a.668.668 0 01.143.075c.153.102.345.264.67.543l1.637 1.403.054.047c.222.19.46.396.759.506.298.11.613.11.905.11l.072-.001H18c.493 0 .787.002.997.03a.706.706 0 01.177.042l.003.001.001.003a.703.703 0 01.042.177c.028.21.03.504.03.997v1.832c0 .292-.002.607.109.905.11.299.316.537.506.759l.047.054 1.403 1.636c.279.326.441.518.542.67a.67.67 0 01.075.14V12l-.003.013a.674.674 0 01-.072.13c-.1.152-.263.344-.542.67l-1.403 1.636-.047.054c-.19.222-.396.46-.506.759-.11.298-.11.613-.11.905l.001.072V18c0 .492-.002.787-.03.997a.705.705 0 01-.037.167l-.003.006-.002.004-.001.003-.003.001a.078.078 0 01-.005.002l-.005.003a.71.71 0 01-.167.037c-.21.028-.504.03-.997.03h-1.832c-.292 0-.607-.002-.905.109-.299.11-.537.316-.759.506l-.054.047-1.636 1.403c-.326.279-.518.441-.67.542a.667.667 0 01-.13.072l-.013.004H12l-.014-.004a.667.667 0 01-.13-.072c-.152-.1-.344-.263-.67-.542L9.55 19.912l-.054-.047c-.222-.19-.46-.396-.759-.506-.298-.11-.613-.11-.905-.11H5.966c-.493 0-.787 0-.998-.029a.711.711 0 01-.177-.042l-.002-.001-.001-.003a.707.707 0 01-.042-.177c-.029-.21-.03-.505-.03-.997v-1.837c0-.29.001-.603-.107-.899-.109-.296-.311-.534-.5-.754l-.045-.054-1.396-1.648c-.274-.323-.434-.514-.533-.666a.667.667 0 01-.074-.141V12c0-.001 0-.005.004-.014a.666.666 0 01.07-.128c.1-.152.259-.343.533-.666l1.396-1.648.046-.054c.188-.22.39-.458.499-.754.108-.297.108-.609.107-.899V6c0-.493.001-.787.03-.997a.706.706 0 01.042-.177l.001-.003.002-.001a.706.706 0 01.177-.042c.211-.028.505-.03.998-.03h1.866c.292 0 .607.002.905-.109.299-.11.537-.316.759-.506l.054-.047 1.636-1.403zM12 .567c-.388 0-.703.147-.97.324a8.63 8.63 0 00-.79.629l-.03.026L8.574 2.95a6.283 6.283 0 01-.294.243.59.59 0 01-.062.042h-.002l-.009.003a.591.591 0 01-.066.007c-.08.006-.188.006-.38.006H5.92c-.433 0-.83 0-1.152.043-.356.048-.732.16-1.04.47-.31.309-.422.684-.47 1.04-.043.323-.043.72-.043 1.152v1.811c0 .19 0 .297-.006.377a.588.588 0 01-.01.074v.002l-.004.008a.59.59 0 01-.037.055 6.271 6.271 0 01-.24.292l-1.396 1.647-.025.03c-.24.283-.462.545-.619.785-.174.266-.318.579-.318.963s.144.697.318.963c.157.24.38.502.619.784l.025.03 1.396 1.648c.124.146.193.228.24.292a.605.605 0 01.037.055l.004.007v.002l.003.01.007.065c.005.08.006.186.006.377v1.812c0 .432 0 .83.043 1.152.048.356.16.731.47 1.04.308.31.684.422 1.04.47.322.043.72.043 1.152.043h1.84c.193 0 .3 0 .381.006a.6.6 0 01.075.01h.002l.008.004a.59.59 0 01.054.037c.065.049.147.118.294.244l1.636 1.403.03.026c.285.244.549.47.79.629.268.177.582.324.97.324s.703-.147.97-.324c.241-.16.505-.385.79-.629l.03-.026 1.636-1.403c.147-.126.229-.195.294-.244a.59.59 0 01.062-.041h.002l.003-.002h.006a.598.598 0 01.066-.008c.08-.006.188-.006.38-.006h1.807c.433 0 .83 0 1.152-.043.356-.048.731-.16 1.04-.47.31-.309.422-.684.47-1.04.043-.323.043-.72.043-1.152V16.24c0-.193 0-.3.006-.381a.602.602 0 01.007-.066c0-.004.002-.006.002-.007v-.002l.001-.002.004-.008a.6.6 0 01.038-.054c.048-.065.117-.147.243-.294l1.403-1.636.026-.031c.244-.284.47-.548.63-.79.176-.267.323-.581.323-.97 0-.387-.147-.702-.324-.969a8.844 8.844 0 00-.629-.79l-.026-.03-1.403-1.636a6.272 6.272 0 01-.243-.294.6.6 0 01-.038-.054l-.002-.005-.002-.003v-.002l-.001-.003a.379.379 0 01-.009-.072 6.256 6.256 0 01-.006-.38V5.954c0-.433 0-.83-.043-1.152-.048-.356-.16-.731-.47-1.04-.309-.31-.684-.422-1.04-.47-.323-.043-.72-.043-1.152-.043H16.24c-.193 0-.3 0-.381-.006a.588.588 0 01-.075-.01h-.002l-.002-.001-.006-.003a.589.589 0 01-.054-.038 6.23 6.23 0 01-.294-.243L13.79 1.546l-.03-.026a8.87 8.87 0 00-.79-.63c-.268-.176-.582-.323-.97-.323zm4.53 8.963a.75.75 0 00-1.06-1.06L11 12.94l-1.47-1.47a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l5-5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgVerified;
