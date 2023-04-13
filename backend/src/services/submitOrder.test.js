const submitOrder = require('./submitOrder');
const paymentGateway = require("../infrastructure/gateways/paymentsGateway");
const ordersRepository = require("../infrastructure/repositories/ordersRepository");

jest.mock("../infrastructure/gateways/paymentsGateway");
jest.mock("../infrastructure/repositories/ordersRepository");

describe("submitOrder", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("returns an error when payment is not provided", async () => {

    // Arrange
    const items = [{
      id: '123'
    }];

    const payment = null;

    // Act
    const result = await submitOrder(items, payment);

    // Assert
    expect(result).toEqual({ order: null, errors: 'Invalid data' });

  });

  it("returns an error when items are not provided", async () => {

    // Arrange
    const items = null;
    const payment = {
      mocked: ''
    };

    // Act
    const result = await submitOrder(items, payment);

    // Assert
    expect(result).toEqual({ order: null, errors: 'Invalid data' });

  });

  it("returns an error when payment processing fails", async () => {

    // Arrange
    const items = [{ id: 1 }, { id: 2 }];
    const payment = { amount: 100 };

    paymentGateway.processPayment.mockResolvedValue(false);

    // Act
    const result = await submitOrder(items, payment);

    // Assert
    expect(result).toEqual({ order: null, errors: 'Payment error' });
    expect(paymentGateway.processPayment).toHaveBeenCalledWith(payment);

  });

  it("returns a success result when payment is processed and order is saved", async () => {

    // Arrange
    const items = [{ id: 1 }, { id: 2 }];
    const payment = { amount: 100 };

    paymentGateway.processPayment.mockResolvedValue(true);

    ordersRepository.saveOrder.mockImplementation(() => {});

    // Act
    const result = await submitOrder(items, payment);

    // Assert
    expect(paymentGateway.processPayment).toHaveBeenCalledWith(payment);
    expect(ordersRepository.saveOrder).toHaveBeenCalledWith(result.order);
    expect(result.errors).toBeNull();
    expect(result.order.items).toEqual(items);
    expect(result.order.payment).toEqual(payment);

  });
});
