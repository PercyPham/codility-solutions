// https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
// First try: https://app.codility.com/demo/results/training5C73P3-Q2G/ Got 60%
// Second try: https://app.codility.com/demo/results/trainingNEX8U2-RGU/ Got 100%

// Every slice must be of size two or three. Slices of bigger sizes are created from such smaller slices.
// Therefore should any bigger slice have an optimal value, all sub-slices must be the same, for this
// case to hold true. Should this not be true, one of the sub-slices must be the optimal slice.
// The others being bigger. Therefore we check all possible slices of size 2/3 and return the smallest one.
// The first such slice is the correct one, do not use <=!

// You can read the formal proof by Minh Tran Dao here: https://www.martinkysel.com/codility-minavgtwoslice-solution/

function solution(A) {
  let smallestAvg = Infinity;
  let index = -1;

  for (let i = 1; i < A.length; i++) {
    const avgOf2 = (A[i - 1] + A[i]) / 2;
    if (avgOf2 < smallestAvg) {
      smallestAvg = avgOf2;
      index = i - 1;
    }

    if (i > 1) {
      const avgOf3 = (A[i - 2] + A[i - 1] + A[i]) / 3;
      if (avgOf3 < smallestAvg) {
        smallestAvg = avgOf3;
        index = i - 2;
      }
    }
  }

  return index;
}

const A = [4, 2, 2, 5, 1, 5, 8];

const start = Date.now();
const result = solution(A); // 1
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
