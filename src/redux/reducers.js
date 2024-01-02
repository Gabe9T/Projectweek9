import masterList from '../components/MasterList/MasterList';

const initialState = {
  mainNewCoffeeList: [...masterList],
  selectedCoffee: null,
  editing: false,
  showBoughtItems: false,
  boughtItems: [],
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COFFEE':
      return {
        ...state,
        mainNewCoffeeList: [...state.mainNewCoffeeList, action.payload],
      };

    case 'UPDATE_COFFEE':
      return {
        ...state,
        mainNewCoffeeList: state.mainNewCoffeeList.map((coffee) =>
          coffee.id === action.payload.id ? action.payload : coffee
        ),
        editing: false,
        selectedCoffee: null,
      };

    case 'DELETE_COFFEE':
      return {
        ...state,
        mainNewCoffeeList: state.mainNewCoffeeList.filter(
          (coffee) => coffee.id !== action.payload
        ),
        selectedCoffee: null,
      };

    case 'BUY_POUND':
      return {
        ...state,
        mainNewCoffeeList: state.mainNewCoffeeList.map((coffee) =>
          coffee.id === action.payload && coffee.qty > 0
            ? { ...coffee, qty: coffee.qty - 1, totalBought: coffee.totalBought + 1 }
            : coffee
        ),
        boughtItems: state.boughtItems.map((item) =>
          item.id === action.payload && item.totalBought > 0
            ? { ...item, totalBought: item.totalBought + 1 }
            : item
        ),
      };

    case 'SELL_POUND':
      return {
        ...state,
        mainNewCoffeeList: state.mainNewCoffeeList.map((coffee) =>
          coffee.id === action.payload && coffee.totalBought > 0
            ? { ...coffee, qty: coffee.qty + 1, totalBought: coffee.totalBought - 1 }
            : coffee
        ),
        boughtItems: state.boughtItems
          .map((item) =>
            item.id === action.payload && item.totalBought > 0
              ? { ...item, totalBought: item.totalBought - 1 }
              : item
          )
          .filter((item) => item.totalBought > 0),
      };

    default:
      return state;
  }
};

export default coffeeReducer;