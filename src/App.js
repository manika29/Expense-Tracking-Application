import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    { title: "Buy Laptop", amount: 5000, date: new Date(2021, 2, 28) },
    { title: "Buy LED", amount: 5000, date: new Date(2021, 2, 28) },
    { title: "Buy Smartphone", amount: 5000, date: new Date(2021, 2, 28) },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
