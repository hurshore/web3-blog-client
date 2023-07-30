export const truncatedString = (
  text: string,
  leftLength: number,
  rightLength: number
) => {
  if (text.length <= leftLength + rightLength) return text;
  return `${text.slice(0, leftLength)}...${text.slice(-rightLength)}`;
};
