import * as React from 'react';

function SvgImagePlus(props) {
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
        d="M10.944 2.25H12a.75.75 0 010 1.5h-1c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289v2c0 1.778.001 3.076.114 4.076l.606-.606 1.671-1.672.037-.037c.635-.635 1.165-1.165 1.642-1.529.504-.384 1.036-.654 1.68-.654.644 0 1.176.27 1.68.654.477.364 1.007.894 1.642 1.53l.037.036L14 15.94c.496-.493.926-.907 1.32-1.208.504-.384 1.036-.654 1.68-.654.644 0 1.176.27 1.68.654.448.342.943.83 1.528 1.415.041-.848.042-1.874.042-3.147v-1a.75.75 0 011.5 0v1.056c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153zM4.702 19.298a2.25 2.25 0 01-.399-.54L5.53 17.53l1.672-1.671c.682-.682 1.14-1.139 1.528-1.434.37-.283.586-.347.77-.347.184 0 .4.064.77.347.387.295.846.752 1.528 1.434l1.672 1.671 2.677 2.678c-.848.041-1.874.042-3.147.042h-2c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812zm14.596 0c-.306.307-.695.524-1.267.672L15.06 17c.491-.488.854-.835 1.17-1.075.37-.283.585-.347.769-.347.184 0 .4.064.77.347.387.295.846.752 1.528 1.434l.672.671c-.148.573-.365.962-.672 1.268zM18.75 3a.75.75 0 00-1.5 0v2.25H15a.75.75 0 000 1.5h2.25V9a.75.75 0 001.5 0V6.75H21a.75.75 0 000-1.5h-2.25V3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgImagePlus;
