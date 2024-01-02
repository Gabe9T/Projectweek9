import { addCoffee, updateCoffee, deleteCoffee, buyPound, sellPound } from '../../redux/actions';

describe('Redux Actions', () => {
  it('should create an action to add coffee', () => {
    const coffee = { name: 'Test Coffee', id: '123' };
    const expectedAction = {
      type: 'ADD_COFFEE',
      payload: coffee,
    };
    expect(addCoffee(coffee)).toEqual(expectedAction);
  });

  it('should create an action to update coffee', () => {
    const coffee = { name: 'Updated Coffee', id: '456' };
    const expectedAction = {
      type: 'UPDATE_COFFEE',
      payload: coffee,
    };
    expect(updateCoffee(coffee)).toEqual(expectedAction);
  });

  it('should create an action to delete coffee', () => {
    const coffeeId = '789';
    const expectedAction = {
      type: 'DELETE_COFFEE',
      payload: coffeeId,
    };
    expect(deleteCoffee(coffeeId)).toEqual(expectedAction);
  });

  it('should create an action to buy a pound of coffee', () => {
    const coffeeId = '123';
    const expectedAction = {
      type: 'BUY_POUND',
      payload: coffeeId,
    };
    expect(buyPound(coffeeId)).toEqual(expectedAction);
  });

  it('should create an action to sell a pound of coffee', () => {
    const coffeeId = '456';
    const expectedAction = {
      type: 'SELL_POUND',
      payload: coffeeId,
    };
    expect(sellPound(coffeeId)).toEqual(expectedAction);
  });
});