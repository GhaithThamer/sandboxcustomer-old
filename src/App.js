import "./styles.css";
import Customer from "./Customer.js";

export default function App() {
  const customerList = ["INGOLSTUD", "ULM", "DH", "ROSENHEIM","BERLIN","MAGDEBURG"];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Customer items={customerList} />
    </div>
  );
}
