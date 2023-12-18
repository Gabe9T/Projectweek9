import * as actionTypes from './actionTypes';

const initialState = {
  formVisibleOnPage: false,
  mainNewCoffeeList: [],
  selectedCoffee: null,
  editing: false,
  showBoughtItems: false,
  boughtItems: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COFFEE:
      return {
        ...state,
        mainNewCoffeeList: [...state.mainNewCoffeeList, action.payload],
      };
      case actionTypes.EDIT_COFFEE:
        return state.map(coffee =>
          coffee.id === action.payload.id ? action.payload : coffee
        );
    case actionTypes.DELETE_COFFEE:
      return state.filter(coffee => coffee.id !== action.payload);

    case actionTypes.BUY_POUND:
      return state.map(coffee =>
        coffee.id === action.payload && coffee.qty > 0
          ? { ...coffee, qty: coffee.qty - 1, totalBought: coffee.totalBought + 1 }
          : coffee
      );

    case actionTypes.SELL_POUND:
      return state.map(coffee =>
        coffee.id === action.payload && coffee.totalBought > 0
          ? { ...coffee, qty: coffee.qty + 1, totalBought: coffee.totalBought - 1 }
          : coffee
      );

    default:
      return state;
  }
};

export default Reducer;