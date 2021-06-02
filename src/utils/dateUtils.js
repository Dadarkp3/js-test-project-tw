const isWeekend = (date) => {
  const newDate = new Date(date);
  return newDate.getDay() === 0 || newDate.getDay() === 6;
};

const countWeekdaysandWeekends = (dates) => {
  let weekdays = 0;
  let weekends = 0;

  dates.forEach((date) => {
    isWeekend(date) ? weekends++ : weekdays++;
  });

  return { weekdays, weekends };
};

module.exports = {
  isWeekend,
  countWeekdaysandWeekends,
};
