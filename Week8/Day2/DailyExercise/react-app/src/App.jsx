import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

const carInfo = { name: 'Ford', model: 'Mustang' };

function App() {
  return (
    <div className="App">
      <h2>Exercise 1 : Car and components</h2>
      <Car carInfo={carInfo} />

      <h2>Exercise 2 : Events</h2>
      <Events />

      <h2>Exercise 3 : Phone and components</h2>
      <Phone />

      <h2>Exercise 4 : useEffect hook</h2>
      <Color />
    </div>
  );
}

export default App;
