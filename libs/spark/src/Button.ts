import { Button, ButtonClassKey, StyleRules } from '@material-ui/core';
import { palette } from './styles/palette';
import { typography } from './styles/typography';

export { Button };

export const MuiButtonDefaultProps = {
  // No disableElevation: true because it makes styling box-shadow's
  //  VERY difficult. Instead, just override wherever it pops up.
  disableFocusRipple: true,
  disableRipple: true,
  variant: 'contained' as const,
  size: 'large' as const,
};

export const MuiButtonStyleOverrides: Partial<StyleRules<ButtonClassKey>> = {
  root: {
    ...typography['label-lg-strong'],
    borderRadius: 24,
    borderWidth: '2px',
    borderStyle: 'solid' as const,
    '&$disabled': {
      opacity: '50%',
    },
  },
  contained: {
    boxShadow: 'none',
    padding: '.25rem 1rem', // 4px (accounting for 2px border width) 16px
    border: `2px solid ${palette.blue[3]}`,
    backgroundColor: palette.blue[3],
    color: palette.common.white,
    '&$disabled': {
      border: `2px solid ${palette.blue[3]}`,
      backgroundColor: palette.blue[3],
      color: palette.common.white,
    },
    '&:hover': {
      boxShadow: 'none',
      borderColor: palette.blue[4],
      backgroundColor: palette.blue[4],
    },
    '&.Mui-focusVisible, &:focus': {
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: palette.blue[5],
    },
  },
  outlined: {
    boxShadow: 'none',
    padding: '.25rem 1rem', // 4px (accounting for 2px border width) 16px
    // re-declare to override default outlined style
    border: `2px solid ${palette.grey.medium}`,
    backgroundColor: palette.common.white,
    color: palette.blue[3],
    '&$disabled': {
      border: `2px solid ${palette.grey.medium}`,
      backgroundColor: palette.common.white,
      color: palette.blue[3],
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: palette.grey.light,
    },
    '&.Mui-focusVisible, &:focus': {
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: palette.blue[5],
    },
  },
  text: {
    boxShadow: 'none',
    // x-dim accounts for 2px border width
    padding: `${typography.pxToRem(4)} ${typography.pxToRem(16)}`,
    border: '2px solid transparent',
    backgroundColor: 'transparent',
    color: palette.blue[3],
    '&$disabled': {
      border: '2px solid transparent',
      backgroundColor: 'transparent',
      color: palette.blue[3],
    },
    '&:hover': {
      boxShadow: 'none',
      color: palette.blue[4],
      backgroundColor: 'transparent',
    },
    '&.Mui-focusVisible, &:focus': {
      boxShadow: `0 0 0 4px ${palette.blue[1]}`,
      borderColor: palette.blue[3],
      backgroundColor: palette.blue[1],
    },
    '&:active': {
      boxShadow: 'none',
      color: palette.blue[4],
    },
  },
  sizeLarge: {
    ...typography['label-xl-strong'],
    // x-dim accounts for 2px border width
    padding: `${typography.pxToRem(12)} ${typography.pxToRem(16)}`,
  },
  sizeSmall: {
    ...typography['label-sm-strong'],
    // x-dim accounts for 2px border width
    padding: `${typography.pxToRem(4)} ${typography.pxToRem(16)}`,
  },
  label: {
    color: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  },
  startIcon: {
    display: 'inherit',
    marginLeft: 0,
    marginRight: 8,
    color: 'inherit',
    '& > .MuiSvgIcon-root': {
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },
  },
  endIcon: {
    display: 'inherit',
    marginLeft: 8,
    marginRight: 0,
    color: 'inherit',
    '& > .MuiSvgIcon-root': {
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },
  },
  iconSizeSmall: {
    fontSize: '1rem', // 16px
    lineHeight: '1rem',
  },
  iconSizeMedium: {
    fontSize: '1.25rem', // 20px
    lineHeight: '1.25rem',
  },
  iconSizeLarge: {
    fontSize: '1.5rem', // 24px
    lineHeight: '1.5rem',
  },
};
