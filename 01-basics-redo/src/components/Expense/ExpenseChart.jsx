import React from 'react';
import ExpenseChartBar from './ExpenseChartBar';
import './ExpenseChart.css';

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const maxExpense = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {chartDataPoints.map((dataPoint) => (
        <ExpenseChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default ExpenseChart;
