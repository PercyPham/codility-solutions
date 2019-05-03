// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
// https://app.codility.com/demo/results/trainingMVFRXT-KCN/

function solution(A) {
  const indexOfFirst0 = A.indexOf(0);

  let sumOfAll1AfterFirst0 = 0;
  for (let i = indexOfFirst0; i < A.length; i++) sumOfAll1AfterFirst0 += A[i];

  let sumOfAllPairs = 0;
  let numOfPairsLeft = sumOfAll1AfterFirst0;

  for (let i = indexOfFirst0; i < A.length; i++)
    if (A[i] === 0) {
      sumOfAllPairs += numOfPairsLeft;
      if (sumOfAllPairs > 1000000000) return -1;
    } else {
      numOfPairsLeft--;
    }

  return sumOfAllPairs;
}

const A = [0, 1, 0, 1, 1];

const start = Date.now();
const result = solution(A); // 5
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${result}`);
