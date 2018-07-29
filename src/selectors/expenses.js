import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
  text = text.toLowerCase();

  const filtered = expenses.filter(({ description, createdAt }) => {
    const createdAtMoment = moment(createdAt);

    const startDateMatch = startDate
      ? startDate.isSameOrBefore(createdAtMoment, 'day')
      : true;
    const endDateMatch = endDate
      ? endDate.isSameOrAfter(createdAtMoment, 'day')
      : true;
    const textMatch = text === '' || description.toLowerCase().includes(text);

    return startDateMatch && endDateMatch && textMatch;
  });

  // Sort the expenses, both date and amount are sorted into descending order.

  return filtered.sort((a, b) => {
    if (sortBy === 'date') return b.createdAt - a.createdAt;

    return b.amount - a.amount;
  });
};
