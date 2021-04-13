const MILISECONDS_IN_DAY = 86_400_000;

export const formatDate = (date: Date) => date.toISOString().split("T")[0];

const randomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

/*
 *    Date will be between Jun 16, 1995 and today
 * */
export const getRandomNonRepeatableDay = () => {
  const previousDate = +localStorage.previousDate || +new Date("1995-06-16");
  /*
    Range between +1 and +10 days
  * */
  const date = randomDate(
    new Date(previousDate + MILISECONDS_IN_DAY),
    new Date(previousDate + MILISECONDS_IN_DAY * 10)
  );
  localStorage.previousDate = +date;
  return formatDate(date);
};

export const getImagesFromLocalStorage = () => {
  return (localStorage.images as string).split(",");
};

export const saveImageToLocalStorage = (image: string) => {
  localStorage.images = [...getImagesFromLocalStorage(), image];
};
