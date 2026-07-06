import { Component } from 'react';
import data from '../data/complexData.json';

class Example2 extends Component {
  render() {
    return (
      <div>
        <h3>Skills</h3>
        {Object.keys(data.Skills).map((category) => (
          <div key={category}>
            <h4>{category}</h4>
            <ul>
              {data.Skills[category].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
