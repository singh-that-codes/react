// Import React and CSS modules
import React, { useState } from 'react';
import './App.css'; // Create an App.css file for styling

// Functional component App
const App = () => {
  // State for input value and output
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // You can perform any processing on the inputValue here
    // For now, let's just set the output to the reversed input
    setOutputValue(inputValue.split('').reverse().join(''));
  };

  return (
    <div className="app-container">
      <h1>React String Processor</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="inputField">Enter a String:</label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <button type="submit">Process</button>
      </form>
      {outputValue && (
        <div className="output-container">
          <h2>Processed String:</h2>
          <p>{outputValue}</p>
        </div>
      )}
    </div>
  );
};

export default App;
