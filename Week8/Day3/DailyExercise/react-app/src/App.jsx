import { Component } from 'react';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import ColorLifecycle from './Components/ColorLifecycle';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <h2>Exercise 1 : React Error Boundary Simulation</h2>

      <h3>Simulation 1 : Two BuggyCounters, one ErrorBoundary</h3>
      <div className="simulation1">
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
      </div>

      <h3>Simulation 2 : Two BuggyCounters, each with its own ErrorBoundary</h3>
      <div className="simulation2">
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div>

      <h3>Simulation 3 : One BuggyCounter, not wrapped in an ErrorBoundary</h3>
      <div className="simulation3">
        <BuggyCounter />
      </div>

      <h2>Exercise 2 & 3 : Lifecycle</h2>
      <div className="lifecycle-section">
        <ColorLifecycle />
      </div>
    </div>
  );
}

export default App;
