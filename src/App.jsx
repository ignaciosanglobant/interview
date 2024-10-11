import reactLogo from './assets/react.svg';
import './App.css';
import NameCard from './components/nameCard';
import { useEffect, useState } from 'react';
import { idGenerator } from './utils/idGenerator';
import { numberGenerator } from './utils/numberGenerator';

const App = () => {
  const [typedName, setTypedName] = useState('');
  const [allNames, setAllNames] = useState(['Fernanda'])


  useEffect(() => {
  })

  const handleInputChange = (e) => {
    setTypedName(e.target.value)
    // Handle the controled input
  };

  const handleAddTask = () => {
    setAllNames([...allNames, typedName])
    setTypedName('')
    // Logic to add task
  };

  const handleDeleteAll = () => {
    setAllNames([]);
    // Logic to delete all elements
  }

  const handleFetch = async () => {
    // Logic to fetch a name
    // Use https://rickandmortyapi.com/api/character/?page=1 as public API
    const characters = await fetch('https://rickandmortyapi.com/api/character/?page=1`')
                              .then(data => data.json())
                              .then(data => data.results)
    console.log(characters)
    const randomChara = numberGenerator(characters.length+1)
    setAllNames([...allNames, characters[randomChara].name])
  }

  const handleDeleteOne = (retrievedName) => {
    setAllNames(allNames.filter(name => name != retrievedName));
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
          {/* This is where the answer will be displayed */}
          {allNames.map(name =>
            <NameCard key={name} newName={name} deleteButton={handleDeleteOne} />
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