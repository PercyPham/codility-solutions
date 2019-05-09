// https://app.codility.com/programmers/lessons/8-leader/dominator/
// https://app.codility.com/demo/results/trainingJTV2HJ-VVQ/

function solution(A) {
  const half = Math.floor(A.length / 2);

  const arr = {};

  for (let i = 0; i < A.length; i++) {
    arr[A[i]] = arr[A[i]] ? arr[A[i]] + 1 : 1;
    if (arr[A[i]] > half) return i;
  }

  return -1;
}

const A = [3, 4, 3, 2, 3, -1, 3, 3];

const start = Date.now();
const result = solution(A); // 0 or 2 or 4 or 6 or 7
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
