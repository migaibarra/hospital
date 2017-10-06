/*global Game:true*/

describe('Hospital', () => {
  let hospital_test;

  beforeEach(() => {
    hospital_test = new Hospital("St. Johns Hospital");
  });

  it('has a name', () => {
    expect(hospital_test.name).toBe("St. Johns Hospital");
  });
});
