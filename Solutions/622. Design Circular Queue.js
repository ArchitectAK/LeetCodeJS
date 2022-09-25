/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
  this.data = new Uint16Array(k)
  this.maxSize = k
  this.head = 0
  this.tail = -1
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false
  this.tail = (this.tail + 1) % this.maxSize
  this.data[this.tail] = value
  return true
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false
  if (this.head === this.tail) this.head = 0, this.tail = -1
  else this.head = (this.head + 1) % this.maxSize
  return true
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this.data[this.head]
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty() ? -1 : this.data[this.tail]
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.tail === -1
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return !this.isEmpty() && (this.tail + 1) % this.maxSize === this.head
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/