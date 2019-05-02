// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

function solution(A) {
  const newArr = A.sort((a, b) => a - b);
  for (let i = 1; i <= newArr.length; i++) if (i !== newArr[i - 1]) return 0;
  return 1;
}

const arr = [4, 1, 3];
console.log(solution(arr));
