// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

function solution(A) {
  const sumOfAll = A.reduce((total, num) => total + num);

  let beforePSum = A[0];
  let afterPSum = sumOfAll - beforePSum;

  let smallestDiff = Math.abs(beforePSum - afterPSum);

  for (let P = 2; P < A.length; P++) {
    beforePSum += A[P - 1];
    afterPSum -= A[P - 1];
    const diff = Math.abs(beforePSum - afterPSum);
    if (diff < smallestDiff) smallestDiff = diff;
  }

  return smallestDiff;
}

const arr = [3, 1, 2, 4, 3];
console.log(solution(arr));
