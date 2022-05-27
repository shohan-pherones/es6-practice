class Student {
  name;
  roll;
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
  year = 2022;
  uniform = "White & Navy Blue";
  favouriteFood = "Burger";
  doTheAssignment() {
    console.log(this.name, "Assignment Finished!");
  }
}

const student1 = new Student("Ayesha Siddika", 72);
const student2 = new Student("Rafik Ahmed", 40);
const student3 = new Student("Rimi Islam", 12);
student1.doTheAssignment();
console.log(student3);
