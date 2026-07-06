import { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 },
  ]);

  const vote = (index) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((language, i) =>
        i === index ? { ...language, votes: language.votes + 1 } : language
      )
    );
  };

  return (
    <div className="App">
      <h1>Vote for your favorite language!</h1>
      <div className="languages">
        {languages.map((language, index) => (
          <div key={language.name} className="language-card">
            <h2>{language.name}</h2>
            <p>{language.votes} votes</p>
            <button onClick={() => vote(index)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
