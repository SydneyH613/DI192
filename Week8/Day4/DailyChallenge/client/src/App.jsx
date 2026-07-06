import { Component } from 'react';
import './App.css';

const SERVER_URL = 'http://localhost:3001';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      inputValue: '',
      responseMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(`${SERVER_URL}/api/hello`);
    const data = await response.json();
    this.setState({ message: data.message });
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(`${SERVER_URL}/api/world`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: this.state.inputValue }),
    });
    const data = await response.json();

    this.setState({ responseMessage: data.message });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Type something..."
          />
          <button type="submit">Submit</button>
        </form>

        {this.state.responseMessage && <p>{this.state.responseMessage}</p>}
      </div>
    );
  }
}

export default App;
