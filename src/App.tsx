import { DarkModeProvider } from './contexts/DarkMode';
import Home from './pages/Home';

function App() {
  return (
    <DarkModeProvider>
      <Home />
    </DarkModeProvider>
  );
}

export default App;
