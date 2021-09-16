import React, { ChangeEventHandler } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useForm } from "bunch-of-react-hooks";

function App() {
  const [formValue, handleChange] = useForm({ name: "" });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input
            type="text"
            name="name"
            value={formValue.name}
            onChange={handleChange as ChangeEventHandler}
            id=""
          />
        </form>
        <span>{formValue.name}</span>
      </header>
    </div>
  );
}

export default App;
