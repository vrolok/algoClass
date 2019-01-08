//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function simpleLoop(num) {
	while (num > 0) {
		console.log(num--);
	}
}

//2. Next, try looping just like above except using recursion

function loop(num) {
  console.log(num);
  if (num === 0) {
    return 0;
  }
  return loop(num - 1);
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function exponent(base, expo) {
  var result = 1;
  while (expo--) {
    result *= base;
  }
  return result;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function RecursiveExponent(base, expo) {
  if (expo === 0) {
    return 1;
  }
  return base * RecursiveExponent(base, expo - 1);
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier(arr, num) {
  if (arr.length === 0) {
    return [];
  }
  let value = arr.pop() * num;
  return recursiveMultiplier(arr, num).concat(value);
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse(arr) {
  if (arr.length === 0) {
    return [];
  }
  let value = arr.shift();
  return recursiveReverse(arr).concat(value);
}