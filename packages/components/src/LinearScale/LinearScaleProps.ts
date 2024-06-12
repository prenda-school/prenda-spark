import React from 'react';
import { LinearScaleParams } from '../utils/linear-scale';

export interface LinearScaleProps extends LinearScaleParams {
  children?: React.ReactNode;
}

export type LinearScaleChildProps = {
  ctx: {
    linearScale: LinearScaleParams;
  };
};
