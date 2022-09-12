export const changeDate = (
  date: Date,
  delimiter = '-',
  options?: { isShowTime: boolean }
) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const day = String(newDate.getDate()).padStart(2, '0');
  const hour = String(newDate.getHours()).padStart(2, '0');
  const minute = String(newDate.getMinutes()).padStart(2, '0');

  const result = `${[year, month, day].join(delimiter)} ${
    options?.isShowTime ? `${hour}:${minute}` : ''
  }`;

  return result;
};

export const createPage = (
  page: number,
  limitPageCount: number,
  totalPage: number
) => {
  const startPageNumber =
    Math.ceil(page / limitPageCount) * limitPageCount - limitPageCount;
  const pages = Array(limitPageCount)
    .fill('')
    .map((_, idx) => {
      if (idx + 1 + startPageNumber > totalPage) return 0;
      return idx + 1 + startPageNumber;
    })
    .filter((item) => item);

  return pages;
};
