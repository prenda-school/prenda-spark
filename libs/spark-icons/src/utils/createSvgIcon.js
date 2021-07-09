// Original credit to https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/packages/material-ui/src/utils/createSvgIcon.js
import React from 'react';
import SvgIcon from '../SvgIcon';

/**
 * Private module reserved for @material-ui/x packages.
 */
export default function createSvgIcon(path, displayName) {
  const Component = (props, ref) => (
    <SvgIcon data-mui-test={`${displayName}Icon`} ref={ref} {...props}>
      {path}
    </SvgIcon>
  );

  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  Component.muiName = SvgIcon.muiName;

  return React.memo(React.forwardRef(Component));
}