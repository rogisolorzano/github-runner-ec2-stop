/**
 * Gets the difference between two dates in hours.
 *
 * @param dateOne
 * @param dateTwo
 * @returns Hours
 */
export const getHoursDifference = (dateOne: Date, dateTwo: Date): number =>
  Math.abs(dateOne.getTime() - dateTwo.getTime()) / 36e5;
