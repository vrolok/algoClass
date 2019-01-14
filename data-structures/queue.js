/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?

*/

function Queue(capacity) {
  this.max = capacity || Infinity;
  this.nextInLine = 0;
  this.line = -1;
  this.store = {};
}

Queue.prototype.enqueue = function(value) {
  let size = this.count();
  if (size < this.max) {
		this.store[++this.line] = value;
		return size;
  }
  return "Max capacity already reached. Remove element before adding a new one.";
};
// Time complexity:

Queue.prototype.dequeue = function() {
  let item = this.peek();
  delete this.store[this.nextInLine++];
  return item;
};
// Time complexity:

Queue.prototype.peek = function() {
  return this.store[this.nextInLine];
};

Queue.prototype.count = function() {
  return Object.keys(this.store).length;
};
// Time complexity:

Queue.prototype.contains = function(value) {
  for (let i in this.store) {
    if (this.store[i] === value) {
      return true;
    }
  }
  return false;
};
// Time complexity:

//module.exports = Queue;


/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.

*/

var Stack = require('./stack');

function QueueTS(capacity) {
	this._in = new Stack();
	this._out = new Stack();
}

QueueTS.prototype.enqueue = function(value) {
	this._in.push(value);
}

QueueTS.prototype.dequeue = function() {
	// if "_out Stack" is empty do move "_in Stack" elements for dequeue
	if (this._out.count() === 0) this._move();
	return this._out.pop();
}

QueueTS.prototype._move = function() {
	// pop elements from _in Stack, add them to _out Stack
	// e.g. 1, 2, 3 => 3, 2, 1
	while (this._in.count() > 0) {
		this._out.push(this._in.pop());
	}
}

QueueTS.prototype.count = function() {
	return this._in.count() + this._out.count();
}

QueueTS.prototype.peek = function() {
	if (this._out.count() === 0) this._move();
	return this._out.peek();
}
 
module.exports = {
	Queue,
	QueueTS
};