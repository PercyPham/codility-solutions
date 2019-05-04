// https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/
// https://app.codility.com/demo/results/trainingKT5KSG-BQ7/

function solution(A, B) {
  const UPSTREAM = 0;
  const DOWNSTREAM = 1;

  let count = 0;

  const arr = [];
  for (let i = 0; i < A.length; i++) {
    if (B[i] === DOWNSTREAM) arr.push(A[i]);
    else {
      let rivalSize = arr.pop();
      while (rivalSize && rivalSize < A[i]) {
        rivalSize = arr.pop();
      }
      if (!rivalSize) count++;
      else arr.push(rivalSize);
    }
  }
  count += arr.length;

  return count;
}

const A = [4, 3, 2, 1, 5];
const B = [0, 1, 0, 0, 0];

const start = Date.now();
const result = solution(A, B); // 2
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
