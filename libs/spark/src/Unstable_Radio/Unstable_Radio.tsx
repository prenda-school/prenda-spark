import React, { forwardRef, Ref } from 'react';
import clsx from 'clsx';
import {
  default as MuiRadio,
  RadioProps as MuiRadioProps,
} from '@material-ui/core/Radio';
import makeStyles from '../makeStyles';
import { StyledComponentProps } from '../utils';
import Unstable_RadioIcon from './Unstable_RadioIcon';
import { useRadioGroupMore } from '../Unstable_RadioGroup';

export interface Unstable_RadioProps
  extends Omit<
      MuiRadioProps,
      | 'checkedIcon'
      | 'classes'
      | 'color'
      | 'centerRipple'
      | 'disableRipple'
      | 'disableFocusRipple'
      | 'disableTouchRipple'
      | 'edge'
      | 'focusRipple'
      | 'icon'
      | 'size'
      | 'TouchRippleProps'
    >,
    StyledComponentProps<Unstable_RadioClassKey> {
  /**
   * If `true`, the component should be displayed in an error state.
   */
  error?: boolean;
}

export type Unstable_RadioClassKey = 'root' | 'error';

const useStyles = makeStyles<Unstable_RadioClassKey>(
  {
    /* Styles applied to the root element. */
    root: {
      // unset Mui internal IconButton default
      padding: 0,
      backgroundColor: 'unset',
      color: 'unset',
      '&:hover': {
        backgroundColor: 'unset',
        color: 'unset',
      },
      // unset PDS v1
      margin: 0,
    },
    error: {},
  },
  { name: 'MuiSparkUnstable_Radio' }
);

const Unstable_Radio = forwardRef<unknown, Unstable_RadioProps>(
  function Unstable_Radio(props, ref) {
    const {
      classes: classesProp,
      className,
      error,
      required: requiredProp,
      ...other
    } = props;

    const classes = useStyles();

    const radioGroup = useRadioGroupMore();

    let required = requiredProp;

    if (radioGroup) {
      if (typeof required === 'undefined') {
        required = radioGroup.required;
      }
    }

    return (
      <MuiRadio
        checkedIcon={<Unstable_RadioIcon checked />}
        classes={{ root: clsx(classes.root, classesProp?.root) }}
        className={clsx(className, { [classes.error]: error })}
        color="default"
        disableFocusRipple
        disableRipple
        disableTouchRipple
        focusRipple={false}
        icon={<Unstable_RadioIcon />}
        ref={ref as Ref<HTMLButtonElement>}
        required={required}
        {...other}
      />
    );
  }
);

export default Unstable_Radio;