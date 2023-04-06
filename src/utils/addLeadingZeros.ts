const addLeadingZeros = (number: number) => {
  return String(number).padStart(3, "0");
};

export default addLeadingZeros;
