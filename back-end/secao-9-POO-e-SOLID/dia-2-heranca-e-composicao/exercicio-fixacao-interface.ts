interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `o resultado da soma é : ${this.myNumber + myParam}`
  }
}

const newObj = new MyClass(8);
console.log(newObj.myFunc(5));
