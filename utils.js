import {times} from 'ramda'
import {LinkedList} from './LinkedList.js';

export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
export const getRandomItems = count => times(i => ({
  id: `${String.fromCharCode(i).repeat(3)}-${i}`,
  value: random(0, count)
}), count)

// arr to linklist
export const toList = (arr) => {
  const list = new LinkedList();
  arr.forEach(ele => {
    list.add(ele);
  });
  return list;
}

// insertion sort best O(n)
export const insertionSort = (inputArr) => {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while ((j > -1) && (current < inputArr[j])) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
  console.log('input', inputArr);
  return inputArr;
}
