import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import AppContent from './Components/AppContent';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
