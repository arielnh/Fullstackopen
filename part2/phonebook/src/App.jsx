import { useState, useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Number from "./components/Number";
import personsService from "./services/persons";
import Notification from "./components/Notification";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("Write new name.");
  const [newNumber, setNewNumber] = useState(0);
  const [showFilter, setShowFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const pplFilter =
    showFilter.length > 0
      ? persons.filter((p) =>
          p.name.toLowerCase().startsWith(showFilter.toLowerCase())
        )
      : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={showFilter} setShowFilter={setShowFilter} />
      <Notification message={errorMessage} />
      <h2>Add number</h2>
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
      />

      <h3>Numbers</h3>
      <Number pplFilter={pplFilter} />
    </div>
  );
};

export default App;
