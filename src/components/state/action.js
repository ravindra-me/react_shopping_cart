const handleClose = () => {
  return {
    type: "close",
    value: false,
  };
};

const handleOpen = () => {
  return {
    type: "open",
    value: true,
  };
};

const handleOrderBy = (value) => {
  console.log(value);
  return { type: "selected-order-by", value: value };
};

export { handleClose, handleOpen, handleOrderBy };
