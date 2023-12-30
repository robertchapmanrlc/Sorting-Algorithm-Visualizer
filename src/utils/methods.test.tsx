
import { BubbleSort, QuickSort ,InsertionSort, MergeSort } from "./methods";


describe("Algorithms", () => {

  let list = Array(100).fill(0);
  for (let i = 0; i < list.length; i += 1) {
    list[i] = Math.floor(Math.random() * 100);
  }

  const listsEqual = (list1: number[], list2: number[]) => {
    for (let i = 0; i < list1.length; i += 1 ) {
      if (list1[i] != list2[i]) {
        return false;
      }
    }
    return true;
  }

  describe("Bubble Sort", () => {
    test("sorts correctly", () => {
      let listCopy1 = list.slice();
      let listCopy2 = list.slice();

      BubbleSort(listCopy1, []);
      listCopy2.sort((a: number, b: number) => a - b);

      let equality = listsEqual(listCopy1, listCopy2);

      expect(equality).toBe(true);
    });
  });

  describe("Insertion Sort", () => {
    test("sorts correctly", () => {
      let listCopy1 = list.slice();
      let listCopy2 = list.slice();

      InsertionSort(listCopy1, []);
      listCopy2.sort((a: number, b: number) => a - b);

      let equality = listsEqual(listCopy1, listCopy2);

      expect(equality).toBe(true);
    })
  });

  describe("Quick Sort", () => {
    test("sorts correctly", () => {
      let listCopy1 = list.slice();
      let listCopy2 = list.slice();

      listCopy1 = QuickSort(listCopy1, 0, listCopy1.length - 1, []);
      listCopy2.sort((a: number, b: number) => a - b);

      let equality = listsEqual(listCopy1, listCopy2);

      expect(equality).toBe(true);
    })
  });

  describe("Merge Sort", () => {
    test("sorts correctly", () => {
      let listCopy1 = list.slice();
      let listCopy2 = list.slice();

      MergeSort(listCopy1, 0, listCopy1.length - 1);
      listCopy2.sort((a: number, b: number) => a - b);

      let equality = listsEqual(listCopy1, listCopy2);

      expect(equality).toBe(true);
    })
  });
});
