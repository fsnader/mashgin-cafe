const submitOrder = require('./submitOrder');
const paymentInfoGateway = require("../infrastructure/gateways/paymentInfosGateway");
const ordersRepository = require("../infrastructure/repositories/ordersRepository");

jest.mock("../infrastructure/gateways/paymentInfosGateway");
jest.mock("../infrastructure/repositories/ordersRepository");
jest.mock("./getTotalFromItems", () => () => 100);

describe("submitOrder", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("returns an error when paymentInfo is not provided", async () => {

    // Arrange
    const items = [{
      id: '123'
    }];

    const paymentInfo = null;

    // Act
    const result = await submitOrder(items, paymentInfo);

    // Assert
    expect(result).toEqual({ order: null, errors: 'Invalid data' });

  });

  it("returns an error when items are not provided", async () => {

    // Arrange
    const items = null;
    const paymentInfo = {
      mocked: ''
    };

    // Act
    const result = await submitOrder(items, paymentInfo);

    // Assert
    expect(result).toEqual({ order: null, errors: 'Invalid data' });

  });

  it("returns an error when paymentInfo processing fails", async () => {

    // Arrange
    const items = [{ id: 1 }, { id: 2 }];
    const paymentInfo = { amount: 100 };

    paymentInfoGateway.processPayment.mockResolvedValue(false);

    // Act
    const result = await submitOrder(items, paymentInfo);

    // Assert
    expect(result).toEqual({ order: null, errors: 'Payment error' });
    expect(paymentInfoGateway.processPayment).toHaveBeenCalledWith(paymentInfo, 100);

  });

  it("returns a success result when paymentInfo is processed and order is saved", async () => {

    // Arrange
    const items = [{ id: 1 }, { id: 2 }];
    const paymentInfo = { amount: 100 };

    paymentInfoGateway.processPayment.mockResolvedValue(true);

    ordersRepository.saveOrder.mockImplementation(() => {});

    // Act
    const result = await submitOrder(items, paymentInfo);

    // Assert
    expect(paymentInfoGateway.processPayment).toHaveBeenCalledWith(paymentInfo, 100);
    expect(ordersRepository.saveOrder).toHaveBeenCalledWith(result.order);
    expect(result.errors).toBeNull();
    expect(result.order.items).toEqual(items);
    expect(result.order.paymentInfo).toEqual(paymentInfo);

  });
});
