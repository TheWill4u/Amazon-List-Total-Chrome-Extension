function getTotal() {
  const list = Array.from(document.getElementsByClassName("a-offscreen"));
  const taxRate = 0.0112; // 11.2% Arizona tax rate generous amount
  let total = list
    .map((a) => parseFloat(a.innerHTML.replace("$", "")))
    .reduce((a, b) => a + b);
    alert((total + (total * taxRate)).toPrecision(6));
  return (total + (total * taxRate)).toPrecision(6);
};
chrome.tabs.executeScript(getTotal);
