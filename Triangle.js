// https://app.codility.com/programmers/lessons/6-sorting/triangle/
// https://app.codility.com/demo/results/trainingW6UYGD-DKW/

function solution(A) {
  const newArr = A.sort((a, b) => a - b);

  for (let i = 2; i < newArr.length; i++) {
    const a = newArr[i - 2];
    const b = newArr[i - 1];
    const c = newArr[i];
    if (a + b > c && a + c > b && c + b > a) return 1;
  }

  return 0;
}

const A = [10, 2, 5, 1, 8, 20];

const start = Date.now();
const result = solution(A); // 1
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
