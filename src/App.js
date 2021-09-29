import './App.css';
import Conversions from './components/Conversions/Conversions';
import { NumberSystemProvider } from './Context/NumberSystemContext';
import {MainInputProvider} from './Context/MainInputContext';


import {BinaryResultProvider} from './Context/BinaryResultContext'
import {OctalResultProvider} from './Context/OctalResultContext'
import {HexResultProvider} from './Context/HexResultContext'
import {DecimalResultProvider} from './Context/DecimalResultContext'

function App() {
  return (
    <div className="App">
      <NumberSystemProvider>
        <MainInputProvider>
          <BinaryResultProvider>
            <OctalResultProvider>
              <HexResultProvider>
                <DecimalResultProvider>
                  <Conversions />
                </DecimalResultProvider>
              </HexResultProvider>
            </OctalResultProvider>
          </BinaryResultProvider>
        </MainInputProvider>
      </NumberSystemProvider>
    </div>
  );
}

export default App;
