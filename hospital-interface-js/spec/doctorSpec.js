describe('Doctor', () => {
  let doctor_rx;

  beforeEach(() => {
    doctor_rx = new Doctor ("Sarah", "Anne", "Sotiropoulos", []);
  });

  describe("attributes", () =>{
    it('has a first name', () => {
      expect(doctor_rx.first_name).toBe("Sarah");
    });

    it('has a middle_name', () => {
      expect(doctor_rx.middle_name).toBe("Anne");
    });

    it('has a last_name', () => {
      expect(doctor_rx.last_name).toBe("Sotiropoulos");
    });
  });

  describe("associations", () =>{
    it('is instantiated with no patients', () => {
      expect(doctor_rx.patients.length).toBe(0)
    });
  });
});
