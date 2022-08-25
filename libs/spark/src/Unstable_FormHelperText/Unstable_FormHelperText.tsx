import React, { ElementType, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import { formControlState, useFormControl } from '../Unstable_FormControl';

export interface Unstable_FormHelperTextTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'p'
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * If `true`, the helper text should be displayed in a disabled state.
     */
    disabled?: boolean;
    /**
     * If `true`, helper text should be displayed in an error state.
     */
    error?: boolean;
    /**
     * If `true`, the helper text should use filled classes key.
     */
    filled?: boolean;
    /**
     * If `true`, the helper text should use focused classes key.
     */
    focused?: boolean;
    /**
     * Icon placed before the children.
     */
    leadingIcon?: ReactNode;
    /**
     * If `true`, the component reserves one line height for displaying a future message.
     */
    reserveLineHeight?: boolean;
    /**
     * If `true`, the helper text should use required classes key.
     */
    required?: boolean;
  };
  defaultComponent: D;
  classKey: Unstable_FormHelperTextClassKey;
}

export type Unstable_FormHelperTextClassKey = 'root' | 'leadingIcon';

export type Unstable_FormHelperTextProps<
  D extends ElementType = Unstable_FormHelperTextTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_FormHelperTextTypeMap<P, D>, D>;

const useStyles = makeStyles<
  | Unstable_FormHelperTextClassKey
  | 'error'
  | 'disabled'
  | 'focused'
  | 'required'
>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      ...theme.unstable_typography.description,
      alignItems: 'center',
      color: theme.unstable_palette.text.subdued,
      display: 'inline-flex',
      gap: 4,
      letterSpacing: 0,
      margin: 0,
      textAlign: 'left',
      width: 'fit-content',
      '& ul, & ol': {
        marginBlock: 0, // reset HTML default
        paddingInlineStart: '1rem', // reduce HTML default
      },
      /* error -- can get from internal context => can't condition on prop */
      '&.Mui-error': {
        color: theme.unstable_palette.red[700],
      },
      /* disabled -- can get from internal context => can't condition on prop */
      '&.Mui-disabled': {
        color: theme.unstable_palette.text.disabled,
      },
    },
    /* Class applied to the root element if `error={true}`. */
    error: {},
    /* Class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Class applied to the root element if `focused={true}`. */
    focused: {},
    /* Class applied to the root element if `required={true}`. */
    required: {},
    /* Styles applied to the leadingIcon element. */
    leadingIcon: {
      alignSelf: 'flex-start',
      display: 'flex',
      marginTop: 3,
    },
  }),
  { name: 'MuiSparkUnstable_FormHelperText' }
);

const Unstable_FormHelperText: OverridableComponent<Unstable_FormHelperTextTypeMap> = forwardRef(
  function Unstable_FormHelperText(props, ref) {
    const {
      children,
      classes: classesProp,
      className,
      // @ts-expect-error not picked up as a prop from `OverridableComponent`
      component: Component = 'p',
      disabled,
      error,
      filled,
      focused,
      leadingIcon,
      reserveLineHeight,
      required,
      ...other
    } = props;

    const classes = useStyles();

    const muiFormControl = useFormControl();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: [
        'variant',
        'margin',
        'disabled',
        'error',
        'filled',
        'focused',
        'required',
      ],
    });

    return (
      <Component
        className={clsx(
          classes.root,
          classesProp?.root,
          {
            [classes.disabled]: fcs.disabled,
            [classes.error]: fcs.error,
            [classes.focused]: fcs.focused,
            [classes.required]: fcs.required,
          },
          className
        )}
        ref={ref}
        {...other}
      >
        {leadingIcon ? (
          <span className={clsx(classes.leadingIcon, classesProp?.leadingIcon)}>
            {leadingIcon}
          </span>
        ) : null}
        {children}
        {reserveLineHeight && !leadingIcon && !children ? (
          // eslint-disable-next-line react/no-danger
          <span dangerouslySetInnerHTML={{ __html: '&#8203;' }} />
        ) : null}
      </Component>
    );
  }
);

export default Unstable_FormHelperText;