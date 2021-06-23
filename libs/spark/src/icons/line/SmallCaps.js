import * as React from 'react';

function SvgSmallCaps(props) {
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
        d="M4 3.25h-.045c-.433 0-.83 0-1.152.043-.356.048-.731.16-1.04.47-.31.309-.422.684-.47 1.04-.043.323-.043.72-.043 1.152V6h1.5c0-.493.002-.787.03-.997a.706.706 0 01.042-.177l.001-.003.003-.001a.706.706 0 01.177-.042c.21-.028.504-.03.997-.03h4.25v14.5H7a.75.75 0 000 1.5h4a.75.75 0 000-1.5H9.75V4.75H14c.493 0 .787.002.997.03a.705.705 0 01.177.042l.003.001.001.003a.704.704 0 01.042.177c.028.21.03.504.03.997h1.5v-.045c0-.433 0-.83-.043-1.152-.048-.356-.16-.731-.47-1.04-.309-.31-.684-.422-1.04-.47-.323-.043-.72-.043-1.152-.043H4zm11 8h-.034c-.206 0-.427 0-.615.025-.219.03-.5.105-.735.341a1.239 1.239 0 00-.341.735 4.844 4.844 0 00-.025.614v.535a.75.75 0 001.5 0V13l.001-.249.249-.001h2.25v6.5h-.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-.75v-6.5H21l.249.001.001.249v.5a.75.75 0 001.5 0v-.534c0-.206 0-.427-.025-.615-.03-.219-.105-.5-.341-.735a1.239 1.239 0 00-.735-.341 4.845 4.845 0 00-.615-.025H15z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgSmallCaps;