// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
// https://app.codility.com/demo/results/trainingYKUBJW-JYR/

function solution(A) {
  let max = -Infinity;

  const newArr = A.sort((a, b) => a - b);
  const negArr = [];
  const nonNegArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < 0) negArr.push(newArr[i]);
    else nonNegArr.push(newArr[i]);
  }

  if (negArr.length >= 2) {
    let negRes = null;

    if (nonNegArr.length === 0) {
      negRes =
        negArr[negArr.length - 3] *
        negArr[negArr.length - 2] *
        negArr[negArr.length - 1];
    } else {
      negRes = negArr[0] * negArr[1] * nonNegArr[nonNegArr.length - 1];
    }

    if (negRes > max) max = negRes;
  }

  if (nonNegArr.length >= 3) {
    const nonNegRes =
      nonNegArr[nonNegArr.length - 3] *
      nonNegArr[nonNegArr.length - 2] *
      nonNegArr[nonNegArr.length - 1];
    if (nonNegRes > max) max = nonNegRes;
  }

  if (negArr.length < 2 && nonNegArr.length < 3) {
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
