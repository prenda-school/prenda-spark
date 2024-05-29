import { BarCornerRadiusParam } from '../utils';

export interface BarProps
  extends React.SVGTextElementAttributes<SVGPathElement> {
  valueMin: number;
  valueMax: number;
  value: number;
  /**
   * The minimum distance between the start and end edges of the bar, measured in pixels..
   */
  lengthMin: number;
  /**
   * The maximum distance between the start and end edges of the bar, measured in pixels.
   */
  lengthMax: number;
  /**
   * The distance between the parallel, lengthwise edges of the bar, measured in pixels.
   */
  thickness: number;
  /**
   * The direction in which the bar is oriented.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The direction in which the bar grows along its orientation.
   */
  direction?: 'forward' | 'backward';
  /**
   * The corner radius (or radii) of the bar.
   */
  cornerRadius?: BarCornerRadiusParam;
}