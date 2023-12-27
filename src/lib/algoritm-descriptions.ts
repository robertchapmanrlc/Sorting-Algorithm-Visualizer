export const algorithms = [
  {
    name: "Bubble Sort",
    description:
      "Bubble Sort is the simplest sorting algorithm. It operates by iterating over a list repeatedly until it is sorted. Each element is compared to an adjacent element to determine if they need to swap positions. Although very simple to implement, this algorithm is not suitable for data of large sizes due to its worst-case runtime complexity being O(n^2).",
  },
  {
    name: "Quick Sort",
    description:
      "Quick Sort is based on the Divide and Conquer technique. It picks an element to serve as a pivot and partitions the remaining elements around it until the list is sorted. That is, elements smaller than the pivot are placed to the left of the pivot and larger elements are place to the right of the pivot. While any element can be choosen as the pivot, the performance of the algorithm can vary depending on if a good pivot is choosen. It's best and average runtime complexity is O(nlogn) while its worst runtime complexity is O(n^2). While it's efficient for large datasets, it's not a good choice for smaller datasets.",
  },
  {
    name: "Merge Sort",
    description:
      "Merge Sort is based on the Divide and Conquer technique. It divides a list into two smaller lists, sorts the sublists, and merges them together. It's run time complexity is garaunteed to be O(nlogn) in the worst-case, making it perform well for large datasets. However, it's not optimal for smaller datasets.",
  },
  {
    name: "Insertion Sort",
    description:
      "Insertion Sort operates similar to how you might sort playing cards in your hand. The list is conceptually split into two parts: a sorted part and an unsorted part. Elements in the unsorted part are placed into the sorted part. An element is swapped with successive elements in the sorted part until it is in the correct position. While its best-case runtime complexity is O(n), its average and worst-case runtime complexity is O(n^2). It's good choice for smaller datasets and datasets that are already partially sorted.",
  },
] as const;