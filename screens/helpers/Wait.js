export const Wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
