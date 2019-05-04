// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
// https://app.codility.com/demo/results/trainingYKUBJW-JYR/

function solution(A) {
  let max = -Infinity;

  const newArr = A.sort((a, b) => a - b);
  const negativeArr = [];
  const positiveArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < 0) negativeArr.push(newArr[i]);
    else positiveArr.push(newArr[i]);
  }

  if (negativeArr.length >= 2) {
    let negRes = null;

    if (positiveArr.length === 0) {
      negRes =
        negativeArr[negativeArr.length - 3] *
        negativeArr[negativeArr.length - 2] *
        negativeArr[negativeArr.length - 1];
    } else {
      negRes =
        negativeArr[0] * negativeArr[1] * positiveArr[positiveArr.length - 1];
    }

    if (negRes > max) max = negRes;
  }

  if (positiveArr.length >= 3) {
    const posRes =
      positiveArr[positiveArr.length - 3] *
      positiveArr[positiveArr.length - 2] *
      positiveArr[positiveArr.length - 1];
    if (posRes > max) max = posRes;
  }

  if (negativeArr.length < 2 && positiveArr.length < 3) {
    const res = A[0] * A[1] * A[2];
    if (res > max) max = res;
  }

  return max;
}

const A = [-3, 1, 2, -2, 5, 6];

const start = Date.now();
const result = solution(A); // 60
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
