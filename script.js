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
