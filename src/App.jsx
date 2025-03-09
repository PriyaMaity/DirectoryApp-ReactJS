import { useState } from "react";
import "./App.css";
import AddPerson from "./Components/AddPersonComponent/AddPerson";
import RetrieveData from "./Components/RetreiveData/RetrieveData";

function App() {
  const [active, setActive] = useState("add");
  return (
    <div className="app-container">
      <h1>AADHAR VAULT</h1>
      <div className="app-body">
        <button onClick={() => setActive("add")}>Add Person</button>
        <button onClick={() => setActive("retrieve")}>Retrieve Data</button>
      </div>
      {active === "add" ? <AddPerson /> : <RetrieveData />}
    </div>
  );
}

export default App;
