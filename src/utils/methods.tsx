export function shuffle(list: number[]) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
}

export function BubbleSort(list: number[]) {
  
  const len = list.length;;
  let swapped = false;

  for (let i = 0; i < len; i += 1){
    swapped = false;

    for (let j = 0; j < (len - i - 1); j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped)
      break;
  }
}

export function InsertionSort(list: number[]) {
  for (let i = 1; i < list.length; i += 1) {
    let current = list[i];
    let lastIndex = i - 1;
    while (lastIndex >= 0 && list[lastIndex] > current) {
      list[lastIndex + 1] = list[lastIndex];
      lastIndex--;
    }
    list[lastIndex + 1] = current;
  }
}

function swap(list: number[], leftIndex: number, rightIndex: number) {
  let temp = list[leftIndex];
  list[leftIndex] = list[rightIndex];
  list[rightIndex] = temp;
}

function partition(list: number[], left: number, right: number) {
  let pivot = list[Math.floor((right + left) / 2)];

  while (left <= right) {
    while (list[left] < pivot) {
      left += 1;
    }
    while (list[right] > pivot) {
      right -= 1;
    }
    if (left <= right) {
      swap(list, left, right);
      left += 1;
      right -= 1;
    }
  }
  return left;
}

export function QuickSort(list: number[], left: number, right: number) {
  let index = 0;
  if (list.length > 1) {
    index = partition(list, left, right);
    if (left < index - 1) {
      QuickSort(list, left, index - 1);
    }
    if (index < right) {
      QuickSort(list, index, right);
    }
  }
  return list;
}