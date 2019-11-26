export const daysDiff = (start, end) => Math.round((end - start) / (1000 * 60 * 60 * 24));
export const order = (items, key) => items.sort((a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0));
export const max = (items, key) => items.reduce((a, b) => a[key] >= b[key] ? a : b, {});
export const axisYScale = (value): { scaleY: [number, number, number], maxValue: number } => {
  if (value <= 15) {
    return { maxValue: 15, scaleY: [15, 10, 5] };
  }
  if (value <= 30) {
    return { maxValue: 30, scaleY: [30, 20, 10] };
  }
  if (value <= 45) {
    return { maxValue: 45, scaleY: [45, 30, 15] };
  }
  if (value <= 60) {
    return { maxValue: 60, scaleY: [60, 40, 20] };
  }
  if (value <= 120) {
    return { maxValue: 120, scaleY: [120, 80, 40] };
  }
  const maxValue = Math.ceil(value / 100) * 100;
  const step = Math.ceil(maxValue / 3 / 10) * 10;
  return { maxValue, scaleY: [maxValue, maxValue - step, maxValue - step - step] };
};
