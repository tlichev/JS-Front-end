function solve(input) {
    let type = typeof(input);
  if (type === 'number') {
    let res;
    res = Math.PI * Math.pow(input, 2);
    console.log(res.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  }
}
solve("name");
