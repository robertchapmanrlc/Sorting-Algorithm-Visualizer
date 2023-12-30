export function shuffle(list: number[]) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
}

export function BubbleSort(list: number[], steps: number[][]) {
  const len = list.length;
  let swapped = false;

  for (let i = 0; i < len; i += 1) {
    swapped = false;

    for (let j = 0; j < len - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        swapped = true;
        steps.push([...list]);
      }
    }

    if (!swapped) break;
  }
}

export function InsertionSort(list: number[], steps: number[][]) {
  for (let i = 1; i < list.length; i += 1) {
    let current = list[i];
    let lastIndex = i - 1;
    while (lastIndex >= 0 && list[lastIndex] > current) {
      list[lastIndex + 1] = list[lastIndex];
      steps.push([...list]);
      lastIndex--;
    }
    list[lastIndex + 1] = current;
    steps.push([...list]);
  }
}

function swap(list: number[], leftIndex: number, rightIndex: number) {
  let temp = list[leftIndex];
  list[leftIndex] = list[rightIndex];
  list[rightIndex] = temp;
}

function partition(
  list: number[],
  left: number,
  right: number,
  steps: number[][]
) {
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
      steps.push([...list]);
      left += 1;
      right -= 1;
    }
  }
  return left;
}

export function QuickSort(
  list: number[],
  left: number,
  right: number,
  steps: number[][]
) {
  let index = 0;
  if (list.length > 1) {
    index = partition(list, left, right, steps);
    if (left < index - 1) {
      QuickSort(list, left, index - 1, steps);
    }
    if (index < right) {
      QuickSort(list, index, right, steps);
    }
  }
  return list;
}

export function merge(
  list: number[],
  start: number,
  mid: number,
  end: number,
  steps: number[][]
) {
  let start2 = mid + 1;
  if (list[mid] <= list[start2]) {
    return;
  }

  while (start <= mid && start2 <= end) {
    if (list[start] <= list[start2]) {
      start += 1;
    } else {
      let value = list[start2];
      let index = start2;

      while (index != start) {
        list[index] = list[index - 1];
        steps.push([...list]);
        index -= 1;
      }

      list[start] = value;
      steps.push([...list]);

      start += 1;
      mid += 1;
      start2 += 1;
    }
  }
}

export function MergeSort(
  list: number[],
  left: number,
  right: number,
  steps: number[][]
) {
  if (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    MergeSort(list, left, mid, steps);
    MergeSort(list, mid + 1, right, steps);

    merge(list, left, mid, right, steps);
  }
}
