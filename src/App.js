// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ExpensesList from './components/ExpensesList';
import AddExpenseForm from './components/AddExpenseForm';
import TotalExpenses from './components/TotalExpenses';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Expense Tracker</h1>
        <ExpensesList />
        <AddExpenseForm />
        <TotalExpenses />
      </div>
    </Provider>
  );
}

export default App;
