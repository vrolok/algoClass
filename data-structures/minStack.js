var Stack = require('./stack.js');

function MinStack(capacity) {
	// super call
	Stack.call(this, capacity);
	
	// It stores the min value alongside every element in Stack
	// for faster retreval
	this.minStore = [];
}

Object.setPrototypeOf(MinStack.prototype, Stack.prototype);

MinStack.prototype.push = function(value) {
	if (value < this.getMin()) {
		this.minStore.push(value);
	}
	else {
		this.minStore.push(this.getMin());
	}
	// make a call back to parent Stack push method
	return Stack.prototype.push.call(this, value);
}

MinStack.prototype.pop = function() {
	this.minStore.pop();
	// make a call back to parent Stack push method
	return Stack.prototype.pop.call(this);
}

MinStack.prototype.getMin = function() {
	// grab the last array element, if undef -> Infinity
	let last = this.minStore.slice(-1)[0];
	return last ? last : Infinity;
}

module.exports = MinStack;
