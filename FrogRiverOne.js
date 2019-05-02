// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

function solution(X, A) {
  let foundPoses = 0;
  const orderedFilledPoses = [true];
  for (let i = 1; i <= X; i++) orderedFilledPoses.push(false);

  for (let i = 0; i < A.length; i++) {
    if (orderedFilledPoses[A[i]] === false) {
      foundPoses++;
      orderedFilledPoses[A[i]] = true;
    }
    if (foundPoses === X) return i;
  }

  return -1;
}

const X = 5;
const A = [1, 3, 1, 4, 2, 3, 5, 4];
console.log(solution(X, A)); // 6
