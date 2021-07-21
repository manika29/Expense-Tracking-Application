import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 1, title: "A Laptop", amount: 500, date: new Date(2021, 2, 28) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const AddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
