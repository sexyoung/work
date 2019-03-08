const validator = {
  checker: {},
  checkError: function(data) {
    for (var check in this.checker) {
      this.checker[check](data);
    }
  }
}

validator.checker.type = function(data) {
  if(typeof data !== 'number') {
    throw 'not a number';
  };
}

validator.checker.range = function(data) {
  if(data < 0 || data > 100) {
    throw 'discount range should be 0 ~ 100';
  }
}

validator.checker.integer = function(data) {
  if(data % 1 !== 0) {
    throw 'discount should be integer';
  }
}

function discount(discount) {
  validator.checkError(discount);
  const off = 100 - discount;
  return (!(off % 10) || off < 10 ? off / 10: off) + "折";
}

// console.warn(discount('25'));
// console.warn(discount('aaa'));
// console.warn(discount(-1));
// console.warn(discount(101));
// console.warn(discount(55.5));
console.warn(discount(25));
console.warn(discount(0));
console.warn(discount(99));
console.warn(discount(95));
console.warn(discount(90));

// 把再 99 與 90 有差別
