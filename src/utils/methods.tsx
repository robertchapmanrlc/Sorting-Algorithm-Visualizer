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