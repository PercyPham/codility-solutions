// https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
// https://app.codility.com/demo/results/trainingH6EB9R-9US/ 1st try
// https://app.codility.com/demo/results/trainingJP4ABN-UU2/ 2nd try
// https://app.codility.com/demo/results/trainingTGPUSZ-N4S/

function solution(A) {
  let intersections = 0;
  const LIMIT = 10000000;
  const items = [];

  for (var i = 0; i < A.length; i++) {
    items.push({
      base: i,
      start: i - A[i],
      end: i + A[i]
    });
  }

  items.sort((a, b) => a.start - b.start);

  for (let i = 0; i < items.length; i++) {
    let j = i + 1;

    while (items[j] && items[i].end >= items[j].start) {
      if (++intersections > LIMIT) return -1;
      j++;
    }
  }

  return intersections;
}

const A = [1, 5, 2, 1, 4, 0];

const start = Date.now();
const result = solution(A); // 11
const end = Date.now();

console.log(`In: ${end - start} ms, got: ${JSON.stringify(result)}`);
