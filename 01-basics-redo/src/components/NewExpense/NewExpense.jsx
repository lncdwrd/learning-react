import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = (e) => {
    if (e.target.value === 'edit') {
      setIsEditing(true);
    } else if (e.target.value === 'cancel') {
      setIsEditing(false);
    }
  };

  const addExpenseHandler = (formData) => {
    const expense = {
      id: Math.random().toString(),
      ...formData,
    };

    props.onAddExpense(expense);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onCancel={editHandler}
          onAddExpense={addExpenseHandler}
        ></ExpenseForm>
      ) : (
        <button type="button" value={'edit'} onClick={editHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
