import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import ThemedCard from './ThemedCard';
import CharacterCounter from './CharacterCounter';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <h2>Exercise 1 : Theme Switcher</h2>
      <ThemeSwitcher />
      <ThemedCard />

      <h2>Exercise 2 : Character Counter</h2>
      <CharacterCounter />
    </div>
  );
}

export default AppContent;
