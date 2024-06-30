function fibonacci(n) {
       if (n < 2) {
              return n;
       }
       return fibonacci(n - 1) + fibonacci(n - 2);
}


const nthFibonacciNumber = fibonacci(6);
console.log(nthFibonacciNumber);

//time complexity => it is 2^n
//itrative => O(n)
//recursive => O(2^n)
//recursive is not a good soln to fibonacci problem
