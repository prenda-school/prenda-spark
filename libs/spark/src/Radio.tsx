import React, { FC } from 'react';
import {
  Radio,
  RadioProps as MuiRadioProps,
  FormControlLabel,
  Theme,
} from '@material-ui/core';
import { FormControlLabelProps as MuiFormControlLabelProps } from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';
import { createSvgIcon } from '@material-ui/core';
import clsx from 'clsx';
import { colors } from './theme/colors';

// Recreation of Material-UI's internal RadioButton component,
//  but with our icons (bit larger at 26x26, no empty border space)
const StyledSpan = styled.span`
  ${({ theme }) => `
    position: relative;
    display: flex;
    border-radius: 50%;
    
    // Adjust for irregular svg size of radio unchecked button 
    height: 26px;
    width: 26px;
    & .MuiSvgIcon-root{
      width: 26px;
      height: 26px;
      background-color: white;
    }
    &:hover {
      box-shadow: 0 0 0 4px ${theme.palette.tertiary.blue[1]};
    }
    label:hover & {
      color: ${theme.palette.tertiary.blue[3]};
      :not(.SparkRadioIcon-checked) {
        color: ${theme.palette.background.lightContrastText};
      }
    }
    input:focus ~ & {
      box-shadow: 0 0 0 4px ${theme.palette.tertiary.blue[1]};
      &:not(.SparkRadioIcon-checked) .MuiSvgIcon-root {
        transform: scale(0.9);
        transition: ${theme.transitions.create('transform', {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.shortest,
        })};
        &.SparkRadioIcon-dot {
          transform: scale(0.8);
          color: ${theme.palette.tertiary.blue[1]};
        }
      }
      & .SparkRadioIcon-checked .SparkRadioIcon-dot {
        color: ${theme.palette.tertiary.blue[3]};
      }
    }


    &.SparkRadioIcon-checked .SparkRadioIcon-dot {
      transform: scale(1);
      transition: ${theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest,
      })};
    }
    & .SparkRadioIcon-circle {
      border-radius: 50%;
      // (M-UI) Scale applied to prevent dot misalignment in Safari
      transform: scale(1);
    }
    & .SparkRadioIcon-dot {
      background-color: transparent;
      position: absolute;
      left: 0;
      transform: scale(0);
      transition: ${theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest,
      })};
    }
  `}
`;

// viewBox="0 0 26 26"
const SparkRadioButtonUncheckedIcon = createSvgIcon(
  <path d="M13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2ZM0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13Z" />,
  'SparkRadioButtonUnchecked'
);

// viewBox="0 0 26 26"
const SparkRadioButtonCheckedIcon = createSvgIcon(
  <path d="M13 21C17.4183 21 21 17.4183 21 13C21 8.58172 17.4183 5 13 5C8.58172 5 5 8.58172 5 13C5 17.4183 8.58172 21 13 21Z" />,
  'SparkRadioButtonChecked'
);

function SparkRadioButtonIcon(props: {
  checked?: boolean;
  fontSize?: 'small' | 'default';
}) {
  const { checked, fontSize } = props;

  return (
    <StyledSpan
      className={clsx('SparkRadioIcon-root', {
        'SparkRadioIcon-checked': checked,
      })}
    >
      <SparkRadioButtonUncheckedIcon
        color="inherit"
        fontSize={fontSize}
        viewBox="0 0 26 26"
        className="SparkRadioIcon-circle"
      />
      <SparkRadioButtonCheckedIcon
        color="inherit"
        fontSize={fontSize}
        viewBox="0 0 26 26"
        className="SparkRadioIcon-dot"
      />
    </StyledSpan>
  );
}

// End custom radio button, Begin Radio

export interface RadioProps extends Omit<MuiFormControlLabelProps, 'control'> {
  ControlRadioProps?: MuiRadioProps;
}

export const MuiRadioStyleOverrides = {
  root: {
    // Split 8px of padding / margin so icon can use background-color instead of box-shadow
    padding: '0.25rem',
    margin: '0.25rem',
    // Clear Mui's primary/secondary color bgcolor
    backgroundColor: 'unset',
    color: colors.colorsPrendaDarkGrey,
    '&:hover': {
      color: colors.colorsTextIconOnLightHighContrast,
      backgroundColor: 'unset',
    },
    '&.Mui-focusVisible': {
      color: colors.colorsBlue[3],
      backgroundColors: colors.colorsBlue[1],
    },
    '&$checked': {
      color: colors.colorsBlue[3],
    },
    '&$disabled .MuiSvgIcon-root': {
      backgroundColor: colors.colorsPrendaMediumGrey,
      color: colors.colorsPrendaDarkGrey,
    },
  },
};

export const MuiRadioPropOverrides = {
  disableRipple: true,
  color: 'default' as const,
  icon: <SparkRadioButtonIcon />,
  checkedIcon: <SparkRadioButtonIcon checked />,
};

const SparkRadio: FC<RadioProps> = (props) => {
  const { ControlRadioProps, ...other } = props;

  return (
    <FormControlLabel {...other} control={<Radio {...ControlRadioProps} />} />
  );
};

export { SparkRadio as Radio };
