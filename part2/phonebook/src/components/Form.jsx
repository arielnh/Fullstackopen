
import personsService from "./../services/persons";

const Form = ({
  setPersons,
  persons,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  setErrorMessage,
}) => {
  const handlerNumber = (e) => {
    setNewNumber(e.target.value);
  };
  const handlerName = (e) => {
    setNewName(e.target.value);
  };

  const addContact = (e) => {
    e.preventDefault();

    const newContact = {
      name: newName,
      phone: newNumber,
    };
    console.log(newContact.name);

    if (persons.some((p) => p.name === newContact.name))
      return alert(`${newName} is already added to phonebook`);


    personsService.create(newContact).then(returnedContact => {
      setPersons(persons.concat(returnedContact))
      setNewName("");
      setNewNumber("");
      setErrorMessage(
        `Person '${newContact.name}' has add to the list`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
  };

  

  return (
    <form onSubmit={addContact}>
      <div>
        name: <input value={newName} onChange={handlerName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handlerNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
