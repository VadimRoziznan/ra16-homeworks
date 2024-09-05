import "./App.css";
import { AddButton } from "./components/buttons";
import { InputField } from "./components/inputField";
import { useState } from "react";
import { Watch } from "./components/watch";

const App = () => {

  const [name, setName] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [visible, setVisible] = useState(false);
  const allowedValues = ["New York,", "Moscow", "London", "Tokyo"];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!visible && allowedValues.includes(event.target.nameField.value) && event.target.timeZoneField.value) {
      setName(event.target.nameField.value);
      setTimeZone(event.target.timeZoneField.value);
      setVisible(!visible);
    };
    if (!allowedValues.includes(event.target.nameField.value)) {
      alert("Пожалуйста, введите один из следующих городов: " + allowedValues.join(", "));
      return;
    }
  };

  const handleUnloadWatch = () => {
    if (visible) {
      setVisible(!visible);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <InputField htmlFor="nameField" label="Название" type="text"/>
        <InputField htmlFor="timeZoneField" label="Временная зона" type="number"/>
        <AddButton name="Добавить" type="submit"/>
      </form>
      {visible ? <Watch onClick={handleUnloadWatch} name={name} timeZone={timeZone}/>: null}
    </div>
  );
};


export default App;