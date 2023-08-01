class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    const item = this.data[index];
    return item;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItem(index);
  }

  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('julius');
newArray.push('good');
newArray.push('man');
newArray.push('cool');
newArray.get(3);
// newArray.pop()
newArray.delete(2);
console.log(newArray);
