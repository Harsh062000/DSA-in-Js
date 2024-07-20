function mergeSort(arr) {
       if (arr.length < 2) {
              return arr
       }
       const mid = Math.floor(arr.length / 2);
       const leftArr = arr.slice(0, mid);
       const rightArr = arr.slice(mid, arr.length);
       console.log(`left ${leftArr},right${rightArr}`);
       return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
       const sortedArr = [];
       while (leftArr.length && rightArr.length) {
              if (leftArr[0] <= rightArr[0]) {
                     sortedArr.push(leftArr.shift());
              } else {
                     sortedArr.push(rightArr.shift());
              }
              console.log(sortedArr, leftArr, rightArr);
       }
       return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];

console.log(mergeSort(arr));

// TC => O(N log N)
// SC => O(N)