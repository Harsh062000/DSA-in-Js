function quickSort(arr) {
       if (arr.length < 2) {
              return arr;
       }
       let lastElement = arr[arr.length - 1];
       let leftArr = [];
       let rightArr = [];
       for (let i = 0; i < arr.length - 1; i++) {
              if (arr[i] < lastElement) {
                     leftArr.push(arr[i]);
              } else {
                     rightArr.push(arr[i]);
              }
              console.log(leftArr, rightArr, lastElement);
       }
       return [...quickSort(leftArr), lastElement, ...quickSort(rightArr)];
}


let myArray = [8, 20, -2, 4, -6];
console.log(quickSort(myArray));

// TC worst case => O(n^2)
// TC Avg case => O(nlogn)

// SC => O(n log n)