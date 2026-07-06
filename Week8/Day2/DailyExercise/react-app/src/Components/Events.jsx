import { useState } from 'react';

function Events() {
  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`You typed: ${e.target.value}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>

      <br />
      <br />

      <input type="text" placeholder="Press Enter" onKeyDown={handleKeyDown} />

      <br />
      <br />

      <button onClick={toggle}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Events;
