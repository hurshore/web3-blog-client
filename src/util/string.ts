export const truncatedString = (
  text: string,
  leftLength: number,
  rightLength: number
) => {
  if (text.length <= leftLength + rightLength) return text;
  return `${text.slice(0, leftLength)}...${text.slice(-rightLength)}`;
};

export const areStringsEqual = (str1: string, str2: string) => {
  return str1.toLowerCase() === str2.toLowerCase();
};
