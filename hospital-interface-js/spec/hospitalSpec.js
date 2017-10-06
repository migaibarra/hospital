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
  });
});
