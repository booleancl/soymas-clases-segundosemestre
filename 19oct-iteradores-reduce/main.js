const array1 = [1, 2, 3, 4];

const initialValue = 0;
const reduceFn = (acc, cur, i, arr) => {
  return acc + cur
}

const sumWithInitial = array1.reduce(reduceFn, initialValue);
// const sumWithInitial = array1.reduce(reduceFn);

console.log(sumWithInitial);
// expected output: 10