import React, { useState, useEffect } from "react";
const Total = () => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(getTotal());
  }, []);
  const getTotal = () => {
    const list = Array.from(document.getElementsByClassName("a-offscreen"));
    const taxRate = 0.0112; // 11.2% Arizona tax rate generous amount
    let total = list
      .map((a) => parseFloat(a.innerHTML.replace("$", "")))
      .reduce((a, b) => a + b);
    console.log(total);
    return (total + total * taxRate).toPrecision(6);
  };
  return (
    <div>
      <h2>Total:</h2>
      <p>${total}</p>
    </div>
  );
};

export default Total;
