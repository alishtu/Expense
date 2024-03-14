// actions.js
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    payload: expense
  });
  
  export const deleteExpense = (expenseId) => ({
    type: 'DELETE_EXPENSE',
    payload: expenseId
  });
  
  // Другие действия, например, для обновления расходов или фильтрации
  