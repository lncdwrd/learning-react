import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const editingHandler = (event) => {
    if (event.target.value === 'edit') setIsEditing(true);
    else if (event.target.value === 'cancel') setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={editingHandler}
        />
      ) : (
        <button type="button" value={'edit'} onClick={editingHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
