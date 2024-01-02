import coffeeReducer from '../../redux/reducers';

describe('Redux Reducer', () => {
  it('should handle ADD_COFFEE', () => {
    const initialState = {
      mainNewCoffeeList: [],
    };
    const coffee = { name: 'Test Coffee', id: '123' };
    const action = { type: 'ADD_COFFEE', payload: coffee };
    expect(coffeeReducer(initialState, action)).toEqual({
      mainNewCoffeeList: [coffee],
    });
  });

  it('should handle UPDATE_COFFEE', () => {
    const initialState = {
      mainNewCoffeeList: [
        { name: 'Coffee 1', id: '1' },
        { name: 'Coffee 2', id: '2' },
      ],
      selectedCoffee: null,
      editing: false,
    };
    const updatedCoffee = { name: 'Updated Coffee', id: '2' };
    const action = { type: 'UPDATE_COFFEE', payload: updatedCoffee };

    const expectedState = {
      mainNewCoffeeList: [
        { name: 'Coffee 1', id: '1' },
        { name: 'Updated Coffee', id: '2' },
      ],
      selectedCoffee: null,
      editing: false, 
    };

    expect(coffeeReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_COFFEE', () => {
    const initialState = {
      mainNewCoffeeList: [
        { name: 'Coffee 1', id: '1' },
        { name: 'Coffee 2', id: '2' },
      ],
      selectedCoffee: null,
    };
    const coffeeIdToDelete = '1';
    const action = { type: 'DELETE_COFFEE', payload: coffeeIdToDelete };
    expect(coffeeReducer(initialState, action)).toEqual({
      mainNewCoffeeList: [{ name: 'Coffee 2', id: '2' }],
      selectedCoffee: null,
    });
  });

  it('should handle BUY_POUND', () => {
    const initialState = {
      mainNewCoffeeList: [
        { name: 'Coffee 1', id: '1', qty: 4, totalBought: 1 },
      ],
      boughtItems: [
        { name: 'Coffee 1', id: '1', totalBought: 1 },
      ],
    };
    const action = { type: 'BUY_POUND', payload: '1' };
    expect(coffeeReducer(initialState, action)).toEqual({
      mainNewCoffeeList: [
        { name: 'Coffee 1', id: '1', qty: 3, totalBought: 2 },
      ],
      boughtItems: [
        { name: 'Coffee 1', id: '1', totalBought: 2 },
      ],
    });
  });

  it('should handle SELL_POUND', () => {
    const initialState = {
      mainNewCoffeeList: [
        { name: 'Coffee 1', id: '1', qty: 2, totalBought: 1 },
      ],
      boughtItems: [
        { name: 'Coffee 1', id: '1', totalBought: 1 },
      ],
    };
    const action = { type: 'SELL_POUND', payload: '1' };
    expect(coffeeReducer(initialState, action)).toEqual({
      mainNewCoffeeList: [
        { name: 'Coffee 1', id: '1', qty: 3, totalBought: 0 },
      ],
      boughtItems: [],
    });
  });
});