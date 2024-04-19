// 🦁 add useState import
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [reverse, setReverse] = useState(false);
  const [nameHistory, setNameHistory] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
    if (event.target.value) {
      setNameHistory((prevNames) => [...prevNames, event.target.value]);
    }
  };

  const deleteHistory = (index) => {
    setNameHistory((current) => {
      current.splice(index, 1);
      return [...current];
    });
  };

  const handleCheckboxChange = (event) => {
    setReverse(event.target.checked);
  };

  const displayName = reverse ? name.split('').reverse().join('') : name;

  return (
    <div>
      <input
        type="checkbox"
        checked={reverse}
        onChange={handleCheckboxChange}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      {/* <button onClick={deleteHistory}>Delete History</button> */}

      <p>{name ? `Hello ${displayName}` : 'Write your name'}</p>
      <ul>
        {nameHistory.map((name, index) => (
          <li key={index} onClick={() => deleteHistory({ index })}>
            {name}
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
};

export default App;
