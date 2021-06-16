import * as React from 'react';

function SvgVolumeMute(props) {
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
        d="M16.596 3.117c-.774-.28-1.434.187-1.893.608-.49.448-1.07 1.145-1.776 1.991l-.04.048-.264.317c-.634.761-.813.95-1.03 1.051-.216.101-.475.118-1.466.118h-.179c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h.179c.99 0 1.25.017 1.466.118.217.102.396.29 1.03 1.051l.264.317.04.048c.706.847 1.286 1.543 1.776 1.991.46.421 1.12.888 1.893.608.773-.28.98-1.061 1.065-1.679.09-.657.089-1.564.089-2.666V7.462c0-1.102 0-2.009-.09-2.666-.083-.618-.291-1.4-1.064-1.68z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgVolumeMute;
