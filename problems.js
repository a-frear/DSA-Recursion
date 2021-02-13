/*
1. Counting Sheep

Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. 
That number should be the number of sheep you have. 
The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence

The input to each recursive call is a new input (input - 1)

The output of each recursive call is "Another sheep jumps over the fence" 
when the input is greater than zero, and is "All sheep jumped over the fence"
when the input equals zero. 
*/

const sheepJump = function(input) {
    //base case
    if (input === 0) {
        return console.log('All sheep jumped over the fence')
    }
        console.log('Another sheep jumps over the fence')
        sheepJump(input-1)
}

sheepJump(3)

//Forward phase: 
// sheepJump('3') 'Another sheep...""
    // sheepJump('2')
        // sheepJump('1')
            // sheepJump('0')
            // return "All the sheep... "
        // return (moving up to sheepJump(1), which is at the bottom of the function, so its followed by an automatic return)
    // return
// return

/*
NOT IN THE CURRICULUM, FROM A VIDEO I WATCHED ABOUT RECURSION
*/
function sumRange(n, total = 0) {
    if (n <= 0) {
        return total
    }
    return sumRange(n-1, total + n)
}

sumRange(3, 0)

/* sumRange(3, 0)
    sumRange(2, 3)
        sumRange(1, 5)
            sumRange(0, 6)
            return 6
        return 
    return 
return  */
        
/*
Write a function called powerCalculator() that takes two parameters, 
an integer as a base, and another integer as an exponent. 
The function returns the value of the base raised to the power of the exponent. 
Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0

The input is two integers: base and exponent. 
The output is one integer: the first input value multiplied by itself the second input value amount of times.
(First input is the base, second input the exponent)
The input to each recursive call is the same base but the exponent - 1.
The output of each recursive call is the base multiplied by the itself until the exponent is 0 (at which point it will multiply itself by 1)

*/
const powerCalculator = function(base, exponent) {
    if (exponent < 0) {
        return console.log('exponent should be >= 0')
    }
    else if (exponent === 0) {
        return 1
    }
    return base * powerCalculator(base, exponent - 1)
}

console.log(powerCalculator(10, 3))

/* powerCalculator(10, 3)
    powerCalculator(10, 2)
        powerCalculator(10, 1)
            powerCalculator(10, 0)
            return 
        return 
    return 
return  */


const reverseString = function(string) {
    if(string.length === 1) {
        return string
    }
    if (string === '') {
        return '';
    } else {
        //The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
        return reverseString(string.substr(1)) + string.charAt(0)
    }
}

console.log(reverseString('bar'))

//Forward phase: 
    // reverseString('bar')
        // reverseString('ar')
            // reverseString('r')
                // reverseString('')
                //Backward phase: 
            // return('')
        // return(''+'r')
    // return(''+'a')
// return('ra'+'b') // 'rab'

/* Triangular Number
Calculates the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
                          *
            *           *    *
*     |   *   *  |   *    *    *  |
 1st     2nd             3rd             nth?  
1st trianular number = 1
2nd = (1+2) = 3
3rd = (1+2+3) = 6 
5th = (1+2+3+4+5) = 15
Input: 5
Output: 15

Should return (n*(n+1))/2
*/
const triangular = function(n) {
    if (n < 2)
        return n;
    return n + triangular(n-1)
}

console.log(triangular(3))

//Forward phase: 
    // triangular(3)
        // triangular(2)
            // triangular(1)
                // triangular(0)
                    //Backward phase: 
                // return
            // return
        // return
    // return

/*

5. String Splitter
Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"]
*/

const stringSplitter = function(str, sep) {
    const idx = str.indexOf(sep)
    if(idx === -1) {
        return [str]
    }
    return [str.slice(0, idx)].concat(stringSplitter(str.slice(idx + sep.length), sep))
}

console.log(stringSplitter('02/20/2020', '/'))

/*
6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 
The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/

const fibonacci = function(n) {
    if (n ===1){
        return [0, 1]
    }
    else
    {
        const s = fibonacci(n-1)
        s.push(s[s.length - 1] + s[s.length - 2])
        return s
    }
}

console.log(fibonacci(13))

/*
7. Factorial
Write a recursive program that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number 
between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
Input: 5
Output: 120
*/
function factorial(n) {  
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  console.log(factorial(5))

  /*
12. Binary Representation
Write a recursive function that prints out the binary representation of a given number. 
For example the program should take 3 as an input and print 11 as output, or 25 as an input 
and print 11001 as an output. Note that the binary representation of 0 should be 0. 
Input: 25
Output: 11001
*/
function convertToBinary(num){
    if (num>0){
        let binary = Math.floor(num%2); //save the reminder in binary
		//divide the number by 2 and send that to the function again
		//carry the reminder to the next recursion call
        return (convertToBinary(Math.floor(num/2))+ binary);
    } 
    else {
        return ''; //base case - at some point the divisions will lead to 0
    }
}

console.log(convertToBinary(33))

