// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

function solution(N, A) {
  const arr = [];
  for (let i = 0; i < N; i++) arr[i] = 0;

  let min = 0;
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    const op = A[i];
    if (op > N) {
      min = max;
    } else {
      arr[A[i] - 1] = Math.max(arr[A[i] - 1], min);
      max = Math.max(++arr[A[i] - 1], max);
    }
  }

  for (let i = 0; i < N; i++) arr[i] = Math.max(arr[i], min);

  return arr;
}

const N = 5;
const A = [3, 4, 4, 6, 1, 4, 4];

const start = Date.now();
const result = solution(N, A);
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${result}`);
