// https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
// https://app.codility.com/demo/results/trainingA74XPJ-YSN/

function solution(A, B, K) {
  let count = 0;
  let i = A;

  const division = i % K;

  i = division === 0 ? i : i + K - division;
  if (i <= B || i === 0) count++;

  if (i < B) {
    const different = B - i;
    const newCount = Math.floor(different / K);
    count += newCount;
  }

  return count;
}

const A = 6;
const B = 11;
const K = 2;

const start = Date.now();
const result = solution(A, B, K); // 3
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
