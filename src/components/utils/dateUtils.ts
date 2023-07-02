export const extractDelayFromDateAndNow = (date: Date): number => {
  const doneAt = new Date(date);
  const now = new Date();
  const delay = doneAt.getTime() - now.getTime();
  return delay;
};
