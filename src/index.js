module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Input a new string");
  return string.replace(/\s/g, "");
};