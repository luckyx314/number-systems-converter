import './App.css';
import Conversions from './components/Conversions/Conversions';
import { NumberSystemProvider } from './Context/NumberTypeContext';

function App() {
  return (
    <div className="App">
      <NumberSystemProvider>
        <Conversions />
      </NumberSystemProvider>
    </div>
  );
}

export default App;
