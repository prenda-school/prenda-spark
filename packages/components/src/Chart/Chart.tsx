import React from 'react';
import { ChartProps } from './ChartProps';
import { useChart } from './useChart';

export type ChartRef = SVGSVGElement;

export const Chart = React.forwardRef<ChartRef, ChartProps>((props, ref) => {
  const { svgProps, gProps } = useChart(props);

  return (
    <svg ref={ref} {...svgProps}>
      <g {...gProps}>{svgProps.children}</g>
    </svg>
  );
});
