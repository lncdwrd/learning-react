import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const [amount, setAmount] = useState('');

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const [date, setDate] = useState('');

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    props.onAddExpense(formData);

    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="button" value="cancel" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
