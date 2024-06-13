import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpense from "./Components/IncomeExpense";
import TransactionsList from "./Components/TransactionsList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider className="container">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionsList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
