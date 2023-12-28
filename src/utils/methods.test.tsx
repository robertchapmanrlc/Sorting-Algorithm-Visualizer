
import { BubbleSort } from "./methods";


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

      BubbleSort(listCopy1);
      listCopy2.sort((a: number, b: number) => a - b);

      let equality = listsEqual(listCopy1, listCopy2);

      expect(equality).toBe(true);
    });
  });
});
