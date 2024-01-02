export const addCoffee = (coffee) => ({
  type: 'ADD_COFFEE',
  payload: coffee,
});

export const updateCoffee = (coffee) => ({
  type: 'UPDATE_COFFEE',
  payload: coffee,
});

export const deleteCoffee = (id) => ({
  type: 'DELETE_COFFEE',
  payload: id,
});

export const buyPound = (id) => ({
  type: 'BUY_POUND',
  payload: id,
});

export const sellPound = (id) => ({
  type: 'SELL_POUND',
  payload: id,
});