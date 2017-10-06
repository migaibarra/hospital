/*global Game:true*/

describe('Hospital', () => {
  let hospital;

  beforeEach(() => {
    hospital_test = new Hospital();
  });

  it('has a name' => {
    expect(hospital_test.name).toBe("St. Johns Hospital");
  });
});
