import { Provider } from 'react-redux';

import './App.css';
import Controls from './components/Controls';
import Deck from './components/Deck';
import Hand from './components/Hand';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>21</h1>
        <Deck />
        <Controls />
        <Hand />
      </div>
    </Provider>
  );
}

export default App;
