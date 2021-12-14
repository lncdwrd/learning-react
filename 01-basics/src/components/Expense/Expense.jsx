import React from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../Templates/Card';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';
import './Expense.css';

const Expense = (props) => {
  const [clickedYear, setYear] = useState('2021');

  const filterHandler = (selectedYearData) => setYear(selectedYearData);

  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === clickedYear
  );

  return (
    <section className="card expenses">
      <ExpenseFilter selected={clickedYear} onFilter={filterHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <Card>
        <ExpenseList items={filteredExpenses} />
      </Card>
    </section>
  );
};

export default Expense;
