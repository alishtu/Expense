// reducers.js
const initialState = {
    expenses: []
  };
  
  const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return {
          ...state,
          expenses: [...state.expenses, action.payload]
        };
      case 'DELETE_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.filter(expense => expense.id !== action.payload)
        };
      // Другие обработчики действий
      default:
        return state;
    }
  };
  
  export default expensesReducer;
  