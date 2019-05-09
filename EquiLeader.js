// https://app.codility.com/programmers/lessons/8-leader/equi_leader/
// https://app.codility.com/demo/results/trainingXZFDSN-6UB/

function getLeaderOfAll(A) {
  let leader = null;
  const half = Math.floor(A.length / 2);

  const arr = {};

  for (let i = 0; i < A.length; i++) {
    arr[A[i]] = arr[A[i]] ? arr[A[i]] + 1 : 1;
    if (leader === null && arr[A[i]] > half) leader = A[i];
  }

  if (leader === null) return { leader, totalQuantityOfLeader: 0 };
  else return { leader, totalQuantityOfLeader: arr[leader] };
}

function solution(A) {
  const { leader, totalQuantityOfLeader } = getLeaderOfAll(A);

  if (leader === null) return 0;

  const arr = [];
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    if (i === 0) {
      arr[i] = A[i] === leader ? 1 : 0;
    } else {
      arr[i] = A[i] === leader ? arr[i - 1] + 1 : arr[i - 1];
    }
    if (
      arr[i] > (i + 1) / 2 &&
      totalQuantityOfLeader - arr[i] > (A.length - (i + 1)) / 2
    ) {
      result++;
    }
  }

  return result;
}

const A = [4, 3, 4, 4, 4, 2];

const start = Date.now();
const result = solution(A); // 2
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
