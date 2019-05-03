// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
// https://app.codility.com/demo/results/trainingCR2ACR-JEN/

function solution(S, P, Q) {
  const result = [];
  const lastA = [];
  const lastC = [];
  const lastG = [];

  for (let i = 0; i < S.length; i++) {
    if (i === 0) {
      lastA[i] = -1;
      lastC[i] = -1;
      lastG[i] = -1;
    } else {
      lastA[i] = lastA[i - 1];
      lastC[i] = lastC[i - 1];
      lastG[i] = lastG[i - 1];
    }

    if (S[i] === "A") lastA[i] = i;
    else if (S[i] === "C") lastC[i] = i;
    else if (S[i] === "G") lastG[i] = i;
  }

  for (let i = 0; i < P.length; i++) {
    if (lastA[Q[i]] >= P[i]) result.push(1);
    else if (lastC[Q[i]] >= P[i]) result.push(2);
    else if (lastG[Q[i]] >= P[i]) result.push(3);
    else result.push(4);
  }

  return result;
}

const S = "CAGCCTA";
const P = [2, 5, 0];
const Q = [4, 5, 6];

const start = Date.now();
const result = solution(S, P, Q); // [2, 4, 1]
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
