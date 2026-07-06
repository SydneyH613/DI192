import { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert('The child was unmounted');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class ColorLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true,
    };
    this.changeColor = this.changeColor.bind(this);
    this.deleteChild = this.deleteChild.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    console.log('Before the update, the favorite color was', prevState.favoriteColor);
    return null;
  }

  componentDidUpdate() {
    console.log('after update');
  }

  changeColor() {
    this.setState({ favoriteColor: 'blue' });
  }

  deleteChild() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <h1>{this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>

        {this.state.show && <Child />}

        <br />
        <button onClick={this.deleteChild}>Delete</button>
      </div>
    );
  }
}

export default ColorLifecycle;
