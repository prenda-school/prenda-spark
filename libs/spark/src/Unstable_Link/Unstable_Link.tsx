import * as React from 'react';
import clsx from 'clsx';
import {
  default as MuiLink,
  LinkProps as MuiLinkProps,
} from '@material-ui/core/Link';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps, useMergeClasses } from '../utils';

export interface Unstable_LinkTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'a'
> {
  props: P &
    Omit<MuiLinkProps, 'color' | 'classes' | 'underline'> & {
      /**
       * Whether the link is displayed alone (not inline with other text). Removes "underline" text-decoration of the link.
       */
      standalone?: boolean;
      /**
       * The color of the link.
       */
      color?: 'default' | 'inherit';
    };
  defaultComponent: D;
  classKey: Unstable_LinkClassKey;
}

export type Unstable_LinkProps<
  D extends React.ElementType = Unstable_LinkTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_LinkTypeMap<P, D>, D>;

export type Unstable_LinkClassKey = 'root';

const useStyles = makeStyles<Unstable_LinkClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: ({ standalone, color = 'default' }: Unstable_LinkProps) => ({
      ...theme.unstable_typography.body,
      textDecoration: 'underline',
      ...(standalone && { textDecoration: 'none' }),
      ...((!color || color === 'default') && {
        color: theme.unstable_palette.blue['600'],
        '&:hover': {
          color: theme.unstable_palette.blue['500'],
        },
        '&:visited': {
          color: theme.unstable_palette.purple[600],
          '&:hover': {
            color: theme.unstable_palette.purple[400],
          },
        },
      }),
      ...(color === 'inherit' && { color: 'inherit' }),
      // reset browser default
      '&:focus': {
        outline: 'none',
      },
      '&.Mui-focusVisible, &:focus-visible': {
        boxShadow: `0 0 2px 4px ${theme.unstable_palette.teal[200]}`,
      },
    }),
  }),
  { name: 'MuiSparkUnstable_Link' }
);

const Unstable_Link: OverridableComponent<Unstable_LinkTypeMap> = React.forwardRef(
  function Link(props, ref) {
    const { classes: classesProp, color, standalone, ...other } = props;

    const classes = useStyles(props);

    return (
      <MuiLink
        classes={{
          root: clsx(classes.root, classesProp?.root),
        }}
        underline="none"
        ref={ref}
        {...other}
      />
    );
  }
);

export default Unstable_Link;
