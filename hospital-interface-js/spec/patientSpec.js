describe('Patient', () => {
  let sick_patient;

  beforeEach(() => {
    sick_patient = new Patient ("Andrew", "Sam", "Anderson");
  });

  describe("attributes", () => {
    it('has a first_name', () => {
      expect(sick_patient.first_name).toBe("Andrew");
    });

    it('has a middle_name', () => {
      expect(sick_patient.middle_name).toBe("Sam");
    });

    it('has a last_name', () => {
      expect(sick_patient.last_name).toBe("Anderson");
    });
  });
});
