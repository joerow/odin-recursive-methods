function sumRange(limit) {
  if (limit == 0) {
    return limit;
  } else {
    return limit + sumRange(limit - 1);
  }
}
