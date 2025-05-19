const STROKE_WIDTH = 1;

// A reusable component that builds a vertical box shape using svg
// Note: numbers here are px, not the real values in the dataset.

type VerticalBoxProps = {
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  width: number;
  stroke: string;
  fill: string;
};

export const VerticalBox = ({
  min,
  q1,
  median,
  q3,
  max,
  width,
  stroke,
  fill,
}: VerticalBoxProps) => {
  return (
    <>

      {/* Vertical Line */}
      <line
        x1={width / 2}
        x2={width / 2}
        y1={min}
        y2={max}
        stroke={stroke}
        strokeWidth={STROKE_WIDTH}
      />

      {/* The Box */}
      <rect
        x={0}
        y={q3}
        width={width}
        height={q1 - q3}
        stroke={stroke}
        fill={fill}
      />

      {/* Median Line */}
      <line
        x1={0}
        x2={width}
        y1={median}
        y2={median}
        stroke={stroke}
        color={"blue"}
        strokeWidth={STROKE_WIDTH * 2}
      />

      {/* Bottom Line */}
      <line
        x1={0}
        x2={width}
        y1={min}
        y2={min}
        stroke={stroke}
        strokeWidth={STROKE_WIDTH}
      />

      {/* Top Line */}
      <line
        x1={0}
        x2={width}
        y1={max}
        y2={max}
        stroke={stroke}
        strokeWidth={STROKE_WIDTH}
      />
    </>
  );
};
