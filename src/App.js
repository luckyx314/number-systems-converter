import './App.css';
import Conversions from './components/Conversions/Conversions';
import { NumberSystemProvider } from './Context/NumberSystemContext';
import {MainInputProvider} from './Context/MainInputContext';
import {ConversionResultProvider} from './Context/ConversionResultsContext'

function App() {
  return (
    <div className="App">
      <NumberSystemProvider>
        <MainInputProvider>
          <ConversionResultProvider>
            <Conversions />
          </ConversionResultProvider>
        </MainInputProvider>
      </NumberSystemProvider>
    </div>
  );
}

export default App;
