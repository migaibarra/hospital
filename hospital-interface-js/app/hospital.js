class Hospital {
  constructor(name) {
    this.name = name;
    this.doctors = [];
    this.patients = [];
  };

  hireDoctor(doctor) {
    this.doctors.push(doctor);
  };

  admitPatient(patient) {
    patient.doctors = this.doctors[Math.floor(Math.random()*this.doctors.length)];
    // this.doctorLookup(patient.doctors).patients(patient); // CHECK CODE
    patient.admission = new Date();
    this.patients.push(patient);
  };

  doctorLookup(last_name) {
    return this.doctors.find((doctor) => {
      return doctor.last_name === last_name;
    });
  };

  patientLookup(last_name) {
    return this.patients.find((patient) => {
      return patient.last_name === last_name
    });
  };

  reassignPatientDoctor(patientLastName, doctorLastName) {
    const patient = this.patientLookup(patientLastName);
    const reassignedDoctor = this.doctorLookup(doctorLastName);
    const currentDoctor = patient.doctors
    patient.doctors = reassignedDoctor;
  };
};

// This pattern of adding a class to Window is **NOT** standard and not best-practice
// The standard way of doing so is ES2015 modules, using the export keyword
// Using exports will be covered in a later challenge
window.Hospital = Hospital;
