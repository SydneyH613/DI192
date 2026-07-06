import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const cardStyles = {
  light: { backgroundColor: '#f0f0f0', color: '#111111', border: '1px solid #ccc' },
  dark: { backgroundColor: '#2b2b2b', color: '#f5f5f5', border: '1px solid #444' },
};

function ThemedCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        ...cardStyles[theme],
        padding: '20px',
        borderRadius: '8px',
        marginTop: '16px',
      }}
    >
      <p>The current theme is: {theme}</p>
    </div>
  );
}

export default ThemedCard;
