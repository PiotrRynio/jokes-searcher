export const formattedLastUpdateDate = (lastUpdateDate: Date) => {
  return lastUpdateDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
