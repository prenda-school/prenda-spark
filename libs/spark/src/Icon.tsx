import React, { FC } from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export interface IconProps {
  children: JSX.Element;
  color: 'navy' | 'grey';
  fontSize: 'small' | 'large' | 'default';
  contrast: 'high' | 'low';
}

const useStyles = makeStyles((theme: Theme) => ({
  icon: (props: IconProps) => ({
    color: theme.palette.background[getTextKey(props.color, props.contrast)],
    fontSize: getFontSize(props.fontSize),
  }),
}));

function getTextKey(color = 'navy', contrast = 'high') {
  if (color === 'navy' && contrast === 'high') {
    return 'lightContrastText';
  } else if (color === 'navy' && contrast === 'low') {
    return 'lightLowContrastText';
  } else if (color === 'grey' && contrast === 'high') {
    return 'darkContrastText';
  } else if (color === 'grey' && contrast === 'low') {
    return 'darkLowContrastText';
  } else {
    throw new Error('Invalid color or contrast prop');
  }
}

function getFontSize(size = 'default') {
  if (size === 'small') {
    return '20px';
  } else if (size === 'default') {
    return '24px';
  } else if (size === 'large') {
    return '28px';
  } else {
    throw new Error('invalid size for icon');
  }
}

export const Icon: FC<IconProps> = (props) => {
  const styles = useStyles(props);
  return (
    <SvgIcon viewBox="0 0 24 24" className={styles.icon}>
      {props.children}
    </SvgIcon>
  );
};