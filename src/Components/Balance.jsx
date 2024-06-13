import React from "react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);
    //     console.log(amounts);
    //   }, [transactions]);
    const totalAmounts = amounts
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    setTotal(totalAmounts);
  }, [transactions]);

  return (
    <>
      <h4>Your balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};

export default Balance;
