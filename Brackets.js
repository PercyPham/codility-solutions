// https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
// https://app.codility.com/demo/results/training8QEFZT-EVQ/

function solution(S) {
  if (S.length % 2 === 1) return 0;

  const openBrackets = ["(", "[", "{"];
  const bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  const arr = [];
  for (let i = 0; i < S.length; i++)
    if (openBrackets.includes(S[i])) arr.push(S[i]);
    else if (bracketPairs[arr.pop()] !== S[i]) return 0;

  return arr.length === 0 ? 1 : 0;
}

const S = "{[()()]}";

const start = Date.now();
const result = solution(S); // 1
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
