import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [
    { title: "Buy Laptop", amount: 5000, date: new Date(2021, 2, 28) },
    { title: "Buy LED", amount: 5000, date: new Date(2021, 2, 28) },
    { title: "Buy Smartphone", amount: 5000, date: new Date(2021, 2, 28) },
  ];
  return (
    <div>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      
    </div>
  );
}
export default App;
