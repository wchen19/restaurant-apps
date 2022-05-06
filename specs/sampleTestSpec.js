const sum = (a, b) => a + b;

xdescribe('A Sample Test for Sum', () => {
  it('should return a + b value', () => {
    expect(sum(2, 3))
        .toEqual(5);
  });
});
