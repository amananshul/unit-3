let arr = new Array("a", "b", "c", "d", "e", "f");
function myAmanArr() {
  Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false,
  });
  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
  this.length = arguments.length;
}

myAmanArr.prototype.pushMe = function (value) {
  let index = this.length;
  this[index] = value;
  this.length++;
};
// console.log(Object.values(arr2));
myAmanArr.prototype.peekMe = function () {
  if (this.length == 0) {
    throw new Error("out of bounds");
  }
  return this[this.length - 1];
};
let arr2 = new myAmanArr("a", "b", "c", "d", "e", "f");
arr2.pushMe("l");
let y = arr2.peekMe();
console.log(Object.values(arr2));
console.log(y);
