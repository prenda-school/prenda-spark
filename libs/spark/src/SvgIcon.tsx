import * as React from 'react';
import { SvgIcon, SvgIconProps as MuiSvgIconProps } from '@material-ui/core';
import { palette } from './styles/palette';
import clsx from 'clsx';
import { capitalize } from './utils';

export interface SvgIconProps extends Omit<MuiSvgIconProps, 'color'> {
  contrast?: 'high' | 'low';
  color?:
    | 'inherit'
    | 'onLight'
    | 'onDark'
    | 'disabled'
    | 'error'
    | 'success'
    | 'warning'
    | 'info'
    | 'white';
}

export const MuiSvgIconDefaultProps = {};

// :NOTE: Duotone fill selector is & > *[fill="#F0F1F2"]
export const MuiSvgIconStyleOverrides = {
  root: {
    // fontSizeDefault/Medium
    fontSize: '1.5rem', // 24px
    // contrastHigh is `opacity: 1` which is just the default CSS value
    '&.SparkSvgIcon-contrastLow': {
      opacity: 0.72,
    },
    // custom colors
    '&.SparkSvgIcon-colorSuccess': {
      color: palette.green[2],
      '& > *[fill="#F0F1F2"]': {
        fill: palette.green[1],
        opacity: 0.72,
      },
    },
    '&.SparkSvgIcon-colorWarning': {
      color: palette.yellow[2],
      '& > *[fill="#F0F1F2"]': {
        fill: palette.yellow[1],
        opacity: 0.72,
      },
    },
    '&.SparkSvgIcon-colorInfo': {
      color: palette.blue[2],
      '& > *[fill="#F0F1F2"]': {
        fill: palette.blue[1],
        opacity: 0.72,
      },
    },
    '&.SparkSvgIcon-colorWhite': {
      color: palette.common.white,
      '& > *[fill="#F0F1F2"]': {
        opacity: 0.72,
      },
    },
  },
  fontSizeSmall: {
    fontSize: '1rem', // 16px
  },
  fontSizeLarge: {
    fontSize: '2rem', // 32px
  },
  colorPrimary: {
    color: palette.text.onLight,
  },
  colorSecondary: {
    color: palette.text.onDark,
    '& > *[fill="#F0F1F2"]': {
      opacity: 0.72,
    },
  },
  colorError: {
    color: palette.red[2],
    '& > *[fill="#F0F1F2"]': {
      fill: palette.red[1],
      opacity: 0.72,
    },
  },
};

const SparkSvgIcon = React.forwardRef(function SparkSvgIcon(
  { contrast = 'high', color = 'inherit', className, ...other }: SvgIconProps,
  ref: React.ForwardedRef<SVGSVGElement>
) {
  let muiColor;
  let sparkColor = 'inherit';
  if (color === 'onLight') {
    muiColor = 'primary';
  } else if (color === 'onDark') {
    muiColor = 'secondary';
  } else if (color === 'success') {
    sparkColor = 'success';
    muiColor = 'inherit';
  } else if (color === 'warning') {
    sparkColor = 'warning';
    muiColor = 'inherit';
  } else if (color === 'info') {
    sparkColor = 'info';
    muiColor = 'inherit';
  } else if (color === 'white') {
    sparkColor = 'white';
    muiColor = 'inherit';
  } else {
    muiColor = color;
  }

  return (
    <SvgIcon
      color={muiColor}
      className={clsx(className, {
        [`SparkSvgIcon-contrast${capitalize(contrast)}`]: contrast !== 'high',
        [`SparkSvgIcon-color${capitalize(sparkColor)}`]:
          sparkColor !== 'inherit',
      })}
      {...other}
    />
  );
});

export { SparkSvgIcon as SvgIcon };
