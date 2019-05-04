// https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
// https://app.codility.com/demo/results/training6R2XZZ-CSS/

function solution(H) {
  let count = 0;

  const arr = [0];

  for (let i = 0; i < H.length; i++) {
    const currentHeight = H[i];
    let lastHeight = arr[arr.length - 1];

    if (currentHeight > lastHeight) {
      arr.push(currentHeight);
    } else if (currentHeight < lastHeight) {
      count++;
      arr.pop();
      lastHeight = arr[arr.length - 1];
      while (currentHeight < lastHeight) {
        count++;
        arr.pop();
        lastHeight = arr[arr.length - 1];
      }
      if (currentHeight > lastHeight) arr.push(currentHeight);
    }
  }

  // minus 1 because of initial value of 0 in arr
  count += arr.length - 1;

  return count;
}

const H = [8, 8, 5, 7, 9, 8, 7, 4, 8];

const start = Date.now();
const result = solution(H); // 7
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
