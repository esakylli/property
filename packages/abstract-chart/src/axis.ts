import * as R from "ramda";
import * as AbstractImage from "@promaster/abstract-image";

export type Axis = LinearAxis | LogarithmicAxis;

export interface LinearAxis {
  readonly type: "linear";
  readonly min: number;
  readonly max: number;
  readonly label: string;
}

export function createLinearAxis(
  min: number,
  max: number,
  label: string
): LinearAxis {
  return {
    type: "linear",
    min: min,
    max: max,
    label: label
  };
}

export interface LogarithmicAxis {
  readonly type: "logarithmic";
  readonly min: number;
  readonly max: number;
  readonly label: string;
}

export function createLogarithmicAxis(
  min: number,
  max: number,
  label: string
): LogarithmicAxis {
  return {
    type: "logarithmic",
    min: min,
    max: max,
    label: label
  };
}

const linearMultiples = [1, 2, 5];
const linearPowers = [-2, -1, 0, 1, 2, 3, 4, 5, 6];

export function getTicks(desiredTicks: number, axis: Axis): Array<number> {
  switch (axis.type) {
    case "linear":
      return getLinearTicks(desiredTicks, axis.min, axis.max);
    case "logarithmic":
      return getLogarithmicTicks(desiredTicks, axis.min, axis.max);
    default:
      return [];
  }
}

export function getLinearTicks(
  desiredTicks: number,
  min: number,
  max: number
): Array<number> {
  const alternatives = linearPowers.reduce(
    (currAlts: Array<Array<number>>, power: number) => {
      const base = Math.pow(10, power);
      const baseAlternatives = linearMultiples.map(multiple => {
        const step = base * multiple;
        const cMin = Math.ceil(min / step);
        const cMax = Math.floor(max / step);
        const lines = cMax - cMin + 1;
        const bestMin = cMin * step;
        return R.range(0, lines).map(l => bestMin + l * step);
      });
      return currAlts.concat(baseAlternatives);
    },
    []
  );
  const bestLines = alternatives.reduce(
    (prev: Array<number>, alt: Array<number>) =>
      Math.abs(alt.length - desiredTicks) < Math.abs(prev.length - desiredTicks)
        ? alt
        : prev,
    []
  );
  return bestLines;
}

const logarithmicAlternatives = [
  [0],
  [0, 5],
  [0, 1, 2, 5],
  [0, 1, 2, 3, 5],
  [0, 1, 2, 3, 5, 8],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];

export function getLogarithmicTicks(
  desiredTicks: number,
  min: number,
  max: number
): Array<number> {
  const minPow = Math.floor(Math.log10(min)) - 1;
  const maxPow = Math.ceil(Math.log10(max)) + 1;
  const powers = R.range(0, maxPow - minPow + 1).map(p => minPow + p);
  const alternatives = logarithmicAlternatives.map(stepAlt => {
    const altLines = powers.reduce((lines: Array<number>, power: number) => {
      const base = Math.pow(10, power);
      const powerLines = stepAlt.map(i => i * base);
      return lines.concat(powerLines);
    }, []);
    return altLines.filter(l => l >= min && l <= max);
  });
  const bestLines = alternatives.reduce(
    (prev, alt) =>
      Math.abs(alt.length - desiredTicks) < Math.abs(prev.length - desiredTicks)
        ? alt
        : prev
  );
  return bestLines;
}

export function transformPoint(
  point: AbstractImage.Point,
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  xAxis: Axis | undefined,
  yAxis: Axis | undefined
): AbstractImage.Point {
  const x = transformValue(point.x, xMin, xMax, xAxis);
  const y = transformValue(point.y, yMin, yMax, yAxis);
  return AbstractImage.createPoint(x, y);
}

export function transformValue(
  value: number,
  min: number,
  max: number,
  axis: Axis | undefined
): number {
  if (!axis) {
    return value;
  }
  const range = max - min;
  switch (axis.type) {
    case "linear":
      return min + range * linearTransform(value, axis.min, axis.max);
    case "logarithmic":
      return min + range * logarithmicTransform(value, axis.min, axis.max);
    default:
      return 0;
  }
}

export function inverseTransformValue(
  value: number,
  min: number,
  max: number,
  axis: Axis | undefined
): number {
  if (!axis) {
    return value;
  }
  const range = max - min;
  switch (axis.type) {
    case "linear":
      return inverseLinearTransform((value - min) / range, axis.min, axis.max);
    case "logarithmic":
      return inverseLogarithmicTransform(
        (value - min) / range,
        axis.min,
        axis.max
      );
    default:
      return 0;
  }
}

export function linearTransform(
  value: number,
  min: number,
  max: number
): number {
  return (value - min) / (max - min);
}

export function logarithmicTransform(
  value: number,
  min: number,
  max: number
): number {
  if (value > 0) {
    return (
      (Math.log10(value) - Math.log10(min)) /
      (Math.log10(max) - Math.log10(min))
    );
  } else if (value < 0) {
    return 0.0;
  } else {
    return 0.0;
  }
}

export function inverseLinearTransform(
  value: number,
  min: number,
  max: number
): number {
  return min + value * (max - min);
}

export function inverseLogarithmicTransform(
  value: number,
  min: number,
  max: number
): number {
  return Math.pow(
    10,
    value * (Math.log10(max) - Math.log10(min)) + Math.log10(min)
  );
}
