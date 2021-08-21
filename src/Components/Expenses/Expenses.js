import React, { useState } from "react";
import "./Expenses.css";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const changeFilterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  filteredExpenses.sort((expense1, expense2) => {
    if (
      expense1.date.getMonth().toString() !==
      expense2.date.getMonth().toString()
    ) {
      return (
        expense1.date.getMonth().toString() -
        expense2.date.getMonth().toString()
      );
    }
    return (
      expense1.date.toLocaleString("en-US", { day: "2-digit" }) -
      expense2.date.toLocaleString("en-US", { day: "2-digit" })
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultFilterYear={filterYear}
          onChangeFilterYear={changeFilterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
