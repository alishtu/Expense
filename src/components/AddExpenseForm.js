import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions';

const AddExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !amount || !date) return;
    const newExpense = {
      id: Date.now(),
      name,
      amount,
      date
    };
    addExpense(newExpense);
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <div>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default connect(null, { addExpense })(AddExpenseForm);
