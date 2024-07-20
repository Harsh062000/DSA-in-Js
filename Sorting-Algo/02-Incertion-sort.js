const insertionSort = (arr) => {
       for (let i = 1; i < arr.length; i++) {
              let numberToInsert = arr[i];
              let j = i - 1;
              console.log(i, j, numberToInsert);
              while (j >= 0 && arr[j] > numberToInsert) {
                     arr[j + 1] = arr[j];
                     j = j - 1;
                     console.log(arr, i, j, 'while');
              }
              arr[j + 1] = numberToInsert
              console.log(arr, i, j, 'for');

       }
       return arr;
}

const result = insertionSort([8, 20, -2, 4, -6]);
console.log(result);
/*

TC => O(n^2)
SC => O(1)
Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is a stable sorting algorithm, meaning that elements with equal values maintain their relative order in the sorted output.
*/