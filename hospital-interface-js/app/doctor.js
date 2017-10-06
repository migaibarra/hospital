class Doctor {
  constructor(first_name, middle_name, last_name) {
    this.first_name = first_name;
    this.middle_name = middle_name;
    this.last_name = last_name;
    this.patients = [];
  };
};

// This pattern of adding a class to Window is **NOT** standard and not best-practice
// The standard way of doing so is ES2015 modules, using the export keyword
// Using exports will be covered in a later challenge
window.Game = Game;
