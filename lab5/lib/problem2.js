
function readInput() {
    const numbers = [];
    while (true) {
      let input = prompt("Enter an integer (a negative integer to quit):");

      const num = Number(input);

      if (!Number.isInteger(num)) continue;
      if (num < 0) break;

      numbers.push(num);
    }
    return numbers;
}

function displayStats(list) {
  const sum = list.reduce((acc, val) => acc + val, 0);
  const avg = list.length ? (sum / list.length).toFixed(2) : 0;
  const min = list.length ? Math.min(...list) : 0;
  const max = list.length ? Math.max(...list) : 0;
  const listString = list.length ? list.join(', ') : 'that is empty';

  alert(`For the list ${listString}, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);
}

  list = readInput();      // Must implement this function
  displayStats(list);      // Must implement this function

  