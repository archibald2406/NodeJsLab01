const fs = require('fs');

function sortArrayFromFile(fileName, sortNumber) {
  let data;
  if (fs.existsSync(`files/${fileName}.txt`)) {
    data = fs.readFileSync(`files/${fileName}.txt`, err => {
      if (err) throw err;
    });
  } else {
    console.log('File with specified name does not exist.\n');
    return;
  }

  const array = data.toString().split(',').map(Number);
  let sortedArray;

  switch (sortNumber) {
    case '1':
      sortedArray = array.sort((a, b) => a - b);
      break;
    case '2':
      sortedArray = quickSort(array, 0, array.length - 1);
      break;
    case '3':
      sortedArray = shellSort(array);
      break;
    default:
      console.log('You should enter number from 1 to 3.\n');
      return;
  }

  fs.writeFileSync(`files/${fileName}.txt`, sortedArray, err => {
    if (err) throw err;
  });

  console.log('The file has been updated.\n');
}

function shellSort(array) {
  const l = array.length;
  let gap = Math.floor(l / 2);

  while (gap >= 1) {
    for (let i = gap; i < l; i++) {
      const current = array[i];
      let j = i;
      while (j > 0 && array[j - gap] > current) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = current;
    }
    gap = Math.floor(gap / 2);
  }
  return array;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}

function swap(items, leftIndex, rightIndex){
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

module.exports = { sortArrayFromFile };