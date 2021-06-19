const dateParser = (date) => {
  //props string
  const arr = date.split("-");
  return `${arr[0]} ${arr[1]} ${arr[2].slice(0, 2)}`;
};

export default dateParser;
