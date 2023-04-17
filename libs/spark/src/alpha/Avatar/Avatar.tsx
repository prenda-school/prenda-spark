import type { ElementType } from 'react';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { AvatarProps as MuiAvatarProps } from '@material-ui/core/Avatar';
import { default as MuiAvatar } from '@material-ui/core/Avatar';
import { buildVariant } from '../theme/typography';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

export interface AvatarTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'div'
> {
  props: P &
    Omit<MuiAvatarProps, 'classes' | 'variant'> & {
      /**
       * The color of the component.
       */
      color?:
        | 'neutral'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'blue'
        | 'purple'
        | 'teal'
        | 'magenta';
      /**
       * The size of the component.
       */
      size?: 'large' | 'medium' | 'small';
    };
  defaultComponent: D;
  classKey: AvatarClassKey;
}

export type AvatarProps<
  D extends ElementType = AvatarTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<AvatarTypeMap<P, D>, D>;

export type AvatarClassKey = 'root' | 'img' | 'fallback';

type PrivateClassKey =
  | 'private-root-size-small'
  | 'private-root-size-medium'
  | 'private-root-size-large'
  | 'private-root-color-neutral'
  | 'private-root-color-orange'
  | 'private-root-color-yellow'
  | 'private-root-color-green'
  | 'private-root-color-blue'
  | 'private-root-color-purple'
  | 'private-root-color-teal'
  | 'private-root-color-magenta';

// extracted since there's not an equivalent typography variant
const avatarFontVariantLarge = buildVariant(
  500,
  28,
  36,
  -0.01,
  'none',
  '"Poppins", sans-serif'
);
const avatarFontVariantMedium = buildVariant(
  500,
  20,
  20,
  -0.01,
  'none',
  '"Poppins", sans-serif'
);
const avatarFontVariantSmall = buildVariant(
  500,
  14,
  24,
  -0.01,
  'none',
  '"Poppins", sans-serif'
);

const styles: Styles<AvatarClassKey | PrivateClassKey> = (theme) => ({
  root: {
    backgroundColor: theme.palette_alpha.neutral[70],
    color: theme.palette_alpha.text.heading,
    '& [class*=MuiSvgIcon-root]': {
      color: theme.palette_alpha.text.icon,
    },
  },
  img: {},
  fallback: {},
  /* Private */
  'private-root-color-neutral': {
    backgroundColor: theme.palette_alpha.neutral[70],
  },
  'private-root-color-orange': {
    backgroundColor: theme.palette_alpha.red[200],
  },
  'private-root-color-yellow': {
    backgroundColor: theme.palette_alpha.yellow[200],
  },
  'private-root-color-green': {
    backgroundColor: theme.palette_alpha.green[200],
  },
  'private-root-color-blue': {
    backgroundColor: theme.palette_alpha.blue[200],
  },
  'private-root-color-purple': {
    backgroundColor: theme.palette_alpha.purple[200],
  },
  'private-root-color-teal': {
    backgroundColor: theme.palette_alpha.teal[200],
  },
  'private-root-color-magenta': {
    backgroundColor: theme.palette_alpha.magenta[300],
  },
  /* 
      size
        - must set height/width instead of padding because different children (text, icon) require different padding but there's no way to tell which is passed here
        - set min height/width to match design, and lesser-responsive height/width to scale with user's browser-set font size to maintain a11y
    */
  'private-root-size-small': {
    borderRadius: theme.radii_alpha.sm,
    minHeight: 24,
    minWidth: 24,
    height: theme.typography_alpha.pxToRem(16),
    width: theme.typography_alpha.pxToRem(16),
    ...avatarFontVariantSmall,
    '& [class*=MuiSvgIcon-root]': {
      fontSize: theme.typography_alpha.pxToRem(16),
    },
  },
  'private-root-size-medium': {
    borderRadius: 6,
    minHeight: 40,
    minWidth: 40,
    height: theme.typography_alpha.pxToRem(24),
    width: theme.typography_alpha.pxToRem(24),
    ...avatarFontVariantMedium,
    '& [class*=MuiSvgIcon-root]': {
      fontSize: theme.typography_alpha.pxToRem(24),
    },
  },
  'private-root-size-large': {
    borderRadius: theme.radii_alpha.md,
    minHeight: 64,
    minWidth: 64,
    height: theme.typography_alpha.pxToRem(32),
    width: theme.typography_alpha.pxToRem(32),
    ...avatarFontVariantLarge,
    '& [class*=MuiSvgIcon-root]': {
      fontSize: theme.typography_alpha.pxToRem(32),
    },
  },
});

const Avatar: OverridableComponent<AvatarTypeMap> = forwardRef(function Avatar(
  props,
  ref
) {
  const { classes, color = 'neutral', size = 'large', ...other } = props;

  return (
    <MuiAvatar
      classes={{
        root: clsx(
          classes.root,
          classes[`private-root-color-${color}`],
          classes[`private-root-size-${size}`]
        ),
        img: clsx(classes.img),
        fallback: clsx(classes.fallback),
      }}
      ref={ref}
      {...other}
    />
  );
});

export default withStyles(styles, { name: 'MuiSpark_alpha_Avatar' })(
  Avatar
) as typeof Avatar;