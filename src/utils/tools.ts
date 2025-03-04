export const getDataType = (value: unknown) => {
  if (value instanceof Date) return 'date';
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};