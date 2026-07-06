import { useRef, useState } from 'react';

function CharacterCounter() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type something..."
      />
      <p>Character count: {count}</p>
    </div>
  );
}

export default CharacterCounter;
