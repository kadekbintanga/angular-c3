import { OrdersMockData } from '../samples/orders-mock-data';

describe('OrdersComponent', () => {
  it('should create an instance', () => {
    expect(new OrdersMockData()).toBeTruthy();
  });
});