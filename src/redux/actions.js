import * as actionTypes from './actionTypes';

const toggleFormVisibility = () => ({
  type: actionTypes.TOGGLE_FORM_VISIBILITY,
});

const editCoffee = (updatedCoffee) => ({
  type: actionTypes.EDIT_COFFEE,
  payload: updatedCoffee,
});

const updateCoffee = (updatedCoffee) => ({
  type: actionTypes.UPDATE_COFFEE,
  payload: updatedCoffee,
});

const addCoffee = (newCoffee) => ({
  type: actionTypes.ADD_COFFEE,
  payload: newCoffee,
});

const selectCoffee = (id) => ({
  type: actionTypes.SELECT_COFFEE,
  payload: id,
});

const deleteCoffee = (id) => ({
  type: actionTypes.DELETE_COFFEE,
  payload: id,
});

const sellPound = (id) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SELL_POUND,
      payload: id,
    });
  };
};

const buyPound = (id) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.BUY_POUND,
      payload: id,
    });
  };
};

const toggleBoughtItems = () => ({
  type: actionTypes.TOGGLE_BOUGHT_ITEMS,
});

 export default actionTypes;