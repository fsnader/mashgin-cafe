const data = require('./data');
const menuRepository = require('./menuRepository');

jest.mock('./data', () => ({
  items: [
    { id: 1, name: 'item1', category_id: 1 },
    { id: 2, name: 'item2', category_id: 2 },
    { id: 3, name: 'item3', category_id: 1 }
  ],
  categories: [
    { id: 1, name: 'category1' },
    { id: 2, name: 'category2' }
  ]
}));

describe('getItems function', () => {
  it('returns all items when no categoryId is provided', async () => {
    // Arrange
    const expectedItems = data.items;

    // Act
    const result = await menuRepository.getItems();

    // Assert
    expect(result).toEqual(expectedItems);
  });

  it('returns items with the specified categoryId', async () => {
    // Arrange
    const categoryId = 1;
    const expectedItems = [
      { id: 1, name: 'item1', category_id: 1 },
      { id: 3, name: 'item3', category_id: 1 }
    ];

    // Act
    const result = await menuRepository.getItems(categoryId);

    // Assert
    expect(result).toEqual(expectedItems);
  });
});

describe('getCategories function', () => {
  it('returns all categories', async () => {
    // Arrange
    const expectedCategories = data.categories;

    // Act
    const result = await menuRepository.getCategories();

    // Assert
    expect(result).toEqual(expectedCategories);
  });
});
