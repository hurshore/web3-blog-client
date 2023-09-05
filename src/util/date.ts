export const getDayMonthYear = (dateString: string) => {
  const date = new Date(dateString);
  let day: number | string = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  if (day < 10) day = '0' + day;
  return { day, month, year };
};

export const getPostDate = (timestamp: number) => {
  return getDayMonthYear(new Date(timestamp).toDateString());
};
