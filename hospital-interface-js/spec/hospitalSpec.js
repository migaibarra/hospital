/*global Game:true*/

describe('Hospital', () => {
  let hospital_test;
  let doctor_rx;
  let patient_admission;

  beforeEach(() => {
    hospital_test = new Hospital("St. Johns Hospital");
    doctor_rx = new Doctor("Luigi", "Aldo", "Petrucci")
    patient_admission = new Patient("Sam", "Sounder", "Zaks");
  });

  describe('attributes', () => {
    it('has a name', () => {
      expect(hospital_test.name).toBe("St. Johns Hospital");
    });
  });

  describe('associations', () => {
    it('is instantiated with no doctors (null)', () => {
      expect(hospital_test.doctors.length).toBe(0);
    });

    it('is instantiated with no patients (null)', () => {
      expect(hospital_test.patients.length).toBe(0);
    });

    it('can hire a doctor (push a doctor into the array)', () => {
      doctor_hire = new Doctor("James", "Peter", "Smith");
      hospital_test.hireDoctor(doctor_hire);
      expect(hospital_test.doctors).toContain(doctor_hire);
    });

    it('can admit a patient (push a patient into the array)', () => {
      hospital_test.admitPatient(patient_admission);
      expect(hospital_test.patients).toContain(patient_admission);
    });

    it('will assign an admission time when admitting a patient', () => {
      hospital_test.admitPatient(patient_admission);
      expect(patient_admission.admission instanceof Date).toBe(true);
    });

    it('will assign a doctor when admitting a patient', () => {
      hospital_test.hireDoctor(doctor_rx);
      hospital_test.admitPatient(patient_admission);
      console.log(patient_admission)
      expect(patient_admission.doctors instanceof Doctor).toBe(true)
    });
  });

  describe("behaviors", () => {
    let doctor_rxx;
    let doctorRx;
    beforeEach(() => {
      hospital_test.hireDoctor(doctor_rx);
      hospital_test.admitPatient(patient_admission);
      doctor_rxx = new Doctor("Robert", "", "Brinkley");
      doctorRx = new Doctor("Rebecca", "Jessica", "Garza");
      hospital_test.hireDoctor(doctorRx);
      hospital_test.hireDoctor(doctor_rxx);
    });

    it('can lookup doctors by last name', () => {
      expect(hospital_test.doctorLookup("Brinkley")).toBe(hospital_test.doctors[2]);
    });

    it('can lookup patients by last name', () => {
      expect(hospital_test.patientLookup("Zaks")).toBe(hospital_test.patients[0]);
    });

    it('can reassign a doctor for a patient', () => {

    })
  });
});
