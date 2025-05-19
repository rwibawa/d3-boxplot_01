import { useMemo } from "react";
import type { ScaleBand } from "d3";
import "./style.css";

type AxisBottomProps = {
  xScale: ScaleBand<string>;
};

// tick length
const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale }: AxisBottomProps) => {
  const [min, max] = xScale.range();

  const ticks = useMemo(() => {
    return xScale.domain().map((value) => ({
      value,
      xOffset: (xScale(value) ?? 0) + xScale.bandwidth() / 2,
    }));
  }, [xScale]);

  return (
    <>
      {/* Main horizontal line */}
      <path
        d={["M", min, 0, "L", max, 0].join(" ")}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, 0)`}>
          <line y2={TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            className="axis-bottom-label"
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
