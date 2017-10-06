class Hospital {
  constructor(name) {
    this.name = name;
    this.doctors = [];
    this.patients = [];
  };

  hireDoctor(doctor) {
    this.doctors.push(doctor);
  };
};

// This pattern of adding a class to Window is **NOT** standard and not best-practice
// The standard way of doing so is ES2015 modules, using the export keyword
// Using exports will be covered in a later challenge
window.Game = Game;
