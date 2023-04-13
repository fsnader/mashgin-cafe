const getTotalFromItems = require('./getTotalFromItems');
describe('getTotalFromItems', () => {
  test('should return the total cost of all items', () => {
    // Arrange
    const items = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 },
      { price: 20, quantity: 3 },
    ];
    const expectedTotal = 10 * 2 + 5 * 1 + 20 * 3;

    // Act
    const result = getTotalFromItems(items);

    // Assert
    expect(result).toEqual(expectedTotal);
  });

  test('should return 0 when given an empty array', () => {
    // Arrange
    const items = [];
    const expectedTotal = 0;

    // Act
    const result = getTotalFromItems(items);

    // Assert
    expect(result).toEqual(expectedTotal);
  });
});

