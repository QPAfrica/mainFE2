const convert = (createdAt) => {
  const dataDate = createdAt;
  const date = new Date(dataDate);

  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default convert;
