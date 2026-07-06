import React from 'react';
import './Exercise.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

class Exercise extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>HTML Tags in React</h1>

        <p className="para">
          This paragraph is styled using an external CSS file.
        </p>

        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          Visit Google
        </a>

        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" />
          <button type="submit">Submit</button>
        </form>

        <img src="https://placehold.co/150" alt="placeholder" />

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
