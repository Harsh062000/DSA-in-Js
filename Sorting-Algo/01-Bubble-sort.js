const bubbleSort = (arr) => {
       let swapped;

       do {
              swapped = false;
              for (let i = 0; i < arr.length - 1; i++) {
                     if (arr[i] > arr[i + 1]) {
                            let temp = arr[i];
                            arr[i] = arr[i + 1];
                            arr[i + 1] = temp;
                            swapped = true;
                     }
              }
       } while (swapped);

       return arr;
}

console.log(bubbleSort([8, 20, -2, 4, -6])); //ans => [ -6, -2, 4, 8, 20 ]  

//TC => O(n^2)
//SC => O(1)

// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they
//are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time
//complexity is quite high.