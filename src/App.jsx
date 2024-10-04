import reactLogo from './assets/react.svg';
import './App.css';
import NameCard from './components/nameCard';

const App = () => {
  const handleInputChange = () => {
    // Handle the controled input
  };

  const handleAddTask = () => {
    // Logic to add task
  };

  const handleDeleteAll = () => {
    // Logic to delete all elements
  }

  const handleFetch = () => {
    // Logic to fetch a name
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
            <NameCard />
        </div>
        <div className="input-container">
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Write a name..."
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