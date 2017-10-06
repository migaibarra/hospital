/*global Game:true*/

describe('Hospital', () => {
  let hospital_test;

  beforeEach(() => {
    hospital_test = new Hospital("St. Johns Hospital");
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
      patient_admission = new Patient("Sam", "Sounder", "Zaks");
      hospital_test.admitPatient(patient_admission);
      expect(hospital_test.patients).toContain(patient_admission);
    });
  });
});
