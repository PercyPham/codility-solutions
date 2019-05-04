// https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
// https://app.codility.com/demo/results/trainingG2EXDZ-UES/

function solution(S) {
  let count = 0;
  for (let i = 0; i < S.length; i++)
    if (S[i] === "(") count++;
    else if (--count < 0) return 0;

  return count === 0 ? 1 : 0;
}

const S = "(()(())())";

const start = Date.now();
const result = solution(S); // 1
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
