/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

function reverse(str) {
	if (str.trim() === '') {
		return '';
	}
	return reverse(str.slice(1)) + str.slice(0, 1);
}
