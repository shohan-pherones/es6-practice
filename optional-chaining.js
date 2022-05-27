const student = {
  name: "kutub",
  roll: 11,
  food: "kola",
  mobile: "samsung",
  laptop: "hp",
  library: {
    upperself: "humayun",
    lowerSelf: "mystry",
    middleSelf: {
      firstRack: "book kutta",
      secondRack: "book bilai",
    },
  },
};

console.log(student.library?.lowerSelf?.firstRack?.lastBook);
