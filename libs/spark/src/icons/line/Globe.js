import * as React from 'react';

function SvgGlobe(props) {
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
        d="M10.96 4.25c.382-.363.732-.5 1.04-.5.308 0 .658.137 1.04.5.385.367.767.934 1.103 1.69.197.443.373.94.524 1.482A20.421 20.421 0 0012 7.25c-.922 0-1.818.06-2.668.172.152-.542.328-1.039.525-1.481.336-.757.718-1.324 1.103-1.69zM7.712 7.713c.2-.875.462-1.678.774-2.38a8.7 8.7 0 01.537-1.029 8.276 8.276 0 00-4.72 4.72 8.701 8.701 0 011.028-.537 13.102 13.102 0 012.38-.774zM3.75 12c0 .309.138.659.5 1.04.367.385.934.767 1.69 1.103.443.197.94.373 1.482.524A20.421 20.421 0 017.25 12c0-.922.06-1.818.172-2.668-.542.152-1.039.328-1.481.525-.757.336-1.324.718-1.69 1.103-.364.382-.501.732-.501 1.04zm5.239 3.011A18.573 18.573 0 018.75 12c0-1.066.085-2.08.239-3.011.93-.154 1.945-.239 3.011-.239s2.08.085 3.011.239c.154.93.239 1.945.239 3.011s-.085 2.08-.239 3.011c-.93.154-1.945.239-3.011.239s-2.08-.085-3.011-.239zm-1.277 1.277c-.875-.2-1.678-.462-2.38-.774a8.705 8.705 0 01-1.029-.537 8.276 8.276 0 004.72 4.72 8.696 8.696 0 01-.537-1.028 13.102 13.102 0 01-.774-2.38zm1.62.29c.85.113 1.746.172 2.668.172.922 0 1.818-.06 2.668-.172a10.839 10.839 0 01-.525 1.481c-.336.757-.718 1.324-1.103 1.69-.382.364-.732.501-1.04.501-.308 0-.658-.137-1.04-.5-.385-.367-.767-.934-1.103-1.69-.197-.444-.373-.94-.524-1.482zm6.956-.29c-.2.875-.462 1.678-.774 2.38a8.726 8.726 0 01-.537 1.029 8.276 8.276 0 004.72-4.72 8.702 8.702 0 01-1.028.537c-.703.312-1.506.573-2.38.774zM21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75zm-2.053-2.977a8.696 8.696 0 00-1.028-.537 13.102 13.102 0 00-2.38-.774 13.214 13.214 0 00-.775-2.38 8.705 8.705 0 00-.537-1.029 8.276 8.276 0 014.72 4.72zm-3.119.31c.542.15 1.038.327 1.481.524.757.336 1.324.718 1.69 1.103.364.382.501.732.501 1.04 0 .308-.137.658-.5 1.04-.367.385-.934.767-1.69 1.103-.444.197-.94.373-1.482.524.113-.85.172-1.745.172-2.667 0-.922-.06-1.818-.172-2.668z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGlobe;
