// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// https://app.codility.com/demo/results/trainingXDSWG7-C5X/

function solution(A) {
  const newArr = A.sort((a, b) => a - b);

  let result = 1;
  for (let i = 0; i < A.length; i++) {
    if (newArr[i] > result) return result;
    else if (newArr[i] === result) result++;
  }

  return result;
}

const A = [1, 3, 6, 4, 1, 2];

const start = Date.now();
const result = solution(A); // 5
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${result}`);
