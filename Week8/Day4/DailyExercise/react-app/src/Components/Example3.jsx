import { Component } from 'react';
import data from '../data/complexData.json';

class Example3 extends Component {
  render() {
    return (
      <div>
        <h3>Experiences</h3>
        {data.Experiences.map((experience, index) => (
          <div key={index}>
            <h4>
              {experience.company} &mdash; {experience.role}
            </h4>
            <ul>
              {experience.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
