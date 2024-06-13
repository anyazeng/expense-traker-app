import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpense from "./Components/IncomeExpense";
import TransactionsList from "./Components/TransactionsList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
