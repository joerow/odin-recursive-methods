function sumRange(limit) {
  if (limit == 0) {
    console.log("inner:" + limit);
    return limit;
  } else {
    console.log("outer:" + limit);
    return limit + sumRange(limit - 1);
  }
}
