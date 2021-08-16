import { palette } from './styles/palette';

export { FormControlLabel } from '@material-ui/core';

export const MuiFormControlLabelStyleOverrides = {
  root: {
    marginLeft: -8,
    color: palette.text.onLightLowContrast,
    height: 40,
    marginTop: 1,
    marginBottom: 1,
    '&:hover, &:focus': {
      color: palette.text.onLight,
    },
    '&$disabled': {
      color: palette.grey.dark,
    },
  },
  label: {
    fontWeight: 600,
    lineHeight: '1.125rem',
  },
};
