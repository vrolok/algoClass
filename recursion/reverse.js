/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

function reverse(str) {
	if (str === '') {
		return '';
	}
	return reverse(str.slice(1)) + str.slice(0, 1);
}

console.log(reverse('abcdefg'));