const amount = (list) => {
  const result = {
    max: 0,
    min: +list[0].curency,
    medium: null,
    total: null,
  };
  result.total = Math.floor(
    list.reduce((accumulator, current) => {
      return accumulator + +current.curency;
    }, 0)
  );
  list.forEach((element) => {
    if (+element.curency <= result.min) result.min = +element.curency;
  });
  result.min = stringDivided(Math.floor(result.min));
  list.forEach((element) => {
    if (+element.curency >= result.max) result.max = +element.curency;
  });
  result.max = stringDivided(Math.floor(result.max));
  result.medium = stringDivided(Math.floor(result.total / list.length));
  result.total = stringDivided(result.total);
  return result;
};

export default amount;

const stringDivided = (num) => {
  return num
    .toString()
    .split(/(?=(?:...)*$)/)
    .join(" ");
};
