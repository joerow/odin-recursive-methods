function sumRange(limit) {
  if (limit == 0) {
    return limit;
  } else {
    return limit + sumRange(limit - 1);
  }
}

function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}

function factorial(number) {
  if (number == 1) return number;
  return number * factorial(number - 1);
}

function all(array, callback) {
  var copy = copy || array.slice(); // shallow copies array

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift(); // remove first element from array
    return all(copy, callback);
  } else {
    return false;
  }
}

function productOfArray(array) {
  var copy = copy || array.slice();

  if (copy.length === 0) return 1;

  return array.shift() * productOfArray(array);
}

function contains(obj, value) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }

    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

function totalIntegers(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(array);
}

function SumSquares(array) {
  if (array.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += SumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}

function replicate(times, number) {
  if (times <= 0) return [];

  return [number].concat(replicate(times - 1, number));
}
