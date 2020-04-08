const currencyFilter = (value, currency = "UAH") => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency
  }).format(value);
};

export default currencyFilter;
