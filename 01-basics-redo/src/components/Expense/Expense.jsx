import React, { useState } from 'react';
import Section from '../Templates/Section';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';
import './Expense.css';

const Expense = (props) => {
  const [year, setYear] = useState('2021');

  const filterHandler = (selectedYear) => setYear(selectedYear);

  console.log(props.data);

  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Section className="card expenses">
      <ExpenseFilter selected={year} onFilter={filterHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList data={filteredExpenses}></ExpenseList>
    </Section>
  );
};

export default Expense;
