// https://app.codility.com/programmers/lessons/6-sorting/distinct/
// https://app.codility.com/demo/results/trainingKMCF3P-HJN/

function solution(A) {
  const newArr = A.sort((a, b) => a - b);
  let count = 0;
  let prevVal = null;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== prevVal) count++;
    prevVal = newArr[i];
  }
  return count;
}

const A = [2, 1, 1, 2, 3, 1];

const start = Date.now();
const result = solution(A); // 3
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
