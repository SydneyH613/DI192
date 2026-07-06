import { useState } from 'react';
import './App.css';
import FormComponent from './Components/FormComponent';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: 'Japan',
    lactoseFree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="App">
      <h1>React Form Container</h1>
      <FormComponent formData={formData} handleChange={handleChange} />
    </div>
  );
}

export default App;
