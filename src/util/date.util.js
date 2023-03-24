// a function that parse "22/12/95" as Date
export function parseDdMmYyyy(input) {
  var parts = input.split("/");
  // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[2], parts[1] - 1, parts[0]); // Note: months are 0-based
}
