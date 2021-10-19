import type { SelectProps, SelectClassKey } from './Select';
import { ChevronDown } from '../internal';
import type { Theme } from '../theme';
import type { StyleRules } from '../withStyles';

export const MuiSelectDefaultProps: Partial<SelectProps> = {
  displayEmpty: true,
  IconComponent: ChevronDown,
  MenuProps: {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom' as const,
      horizontal: 'right' as const,
    },
    transformOrigin: {
      vertical: 'top' as const,
      horizontal: 'right' as const,
    },
    classes: { paper: 'MuiSparkMenu-offsetTop' },
  },
};

export const MuiSelectStylesOverrides = ({
  palette,
}: Theme): Partial<StyleRules<SelectClassKey, SelectProps>> => ({
  root: {
    color: ({ value, defaultValue }) =>
      value || defaultValue ? palette.text.dark : palette.text.darkLowContrast,
  },
  select: {
    borderRadius: 8,
    '&:focus': {
      borderRadius: 8,
      backgroundColor: palette.common.white,
    },
  },
  icon: {
    marginRight: 14,
    transition: 'transform 250ms ease',
  },
});