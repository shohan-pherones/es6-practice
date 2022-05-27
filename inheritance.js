class Common {
  name;
  id;
  food = "burger";
  song = "unknown";
  money = "unknown";
  address = "Sirajganj";
}

class Banker extends Common {
  constructor(name, id) {
    super();
    this.name = name;
    this.id = id;
  }
  uniform = "white";
  phone = "samsung";
  countTheMoney() {
    console.log("count the money!");
  }
}

class Dancer extends Common {
  constructor(name, id) {
    super();
    this.name = name;
    this.id = id;
  }
  uniform = "white";
  phone = "oppo";
  laptop = "asus";
  dance() {
    console.log("dance!");
  }
}

class Nurse extends Common {
  constructor(name, id) {
    super();
    this.name = name;
    this.id = id;
  }
  uniform = "olive";
  phone = "xiaomi";
  vaccinate() {
    console.log("go vaccinate!");
  }
}

const banker1 = new Banker("Abul", 5454);
const dancer1 = new Dancer("Toma", 5425);
const nurse1 = new Nurse("Sarmin", 7548);
console.log(nurse1);
