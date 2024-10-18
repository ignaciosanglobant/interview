import reactLogo from './assets/react.svg';
import './App.css';
import NameCard from './components/nameCard';
import { useEffect, useState } from 'react';
import { idGenerator } from './utils/idGenerator';
import { numberGenerator } from './utils/numberGenerator';

const App = () => {
  const [typedName, setTypedName] = useState('');
  const [allNames, setAllNames] = useState([{name: 'Fernanda', id: idGenerator()}])

  const handleInputChange = (e) => {
    setTypedName(e.target.value)
    // Handle the controled input
  };

  const handleAddTask = () => {
    setAllNames((prevNames)=> [...prevNames, {name: typedName, id: idGenerator()}])
    setTypedName('')
    // Logic to add task
  };

  const handleDeleteAll = () => {
    setAllNames([]);
  }

  const handleFetch = async () => {
    /* const response = await fetch('https://rickandmortyapi.com/api/character/?page=1`')
    const data = await response.json()
    const characters = data.results */
    const characters = (await (await fetch('https://rickandmortyapi.com/api/character/?page=1`')).json()).results
    const randomChara = numberGenerator(characters.length+1)
    setAllNames((prevNames)=> [...prevNames, {name: characters[randomChara].name, id: idGenerator()}])
  }

  const handleDeleteOne = (retrievedKey) => {
    setAllNames(allNames.filter(nameObj => nameObj.id != retrievedKey));
  }

  return (
    <div className="app">
      <header className="header">
        <h1>React Exercise</h1>
        <img src={reactLogo} alt="react-logo" />
      </header>
      <section className="question-section">
        <h2>Managing states / Fetching</h2>
        <p className="subtitle">
          When pressing the button
        </p>
        <div className="answer-box">
          {allNames.map(nameObj =>
            <NameCard key={nameObj.id} id={nameObj.id} name={nameObj.name} deleteButton={handleDeleteOne} />
          )}
        </div>
        <div className="input-container">
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Write a name..."
            value={typedName}
          />
        </div>
        <div className="button-controller">
          <button onClick={handleAddTask}>Add name</button>
          <button onClick={handleDeleteAll}>Delete All</button>
          <button onClick={handleFetch}>Fetch random</button>
        </div>
      </section>
    </div>
  );
};

export default App;