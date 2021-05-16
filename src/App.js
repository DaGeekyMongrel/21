import { Provider } from 'react-redux';

import './App.css';
import Controls from './components/Controls';
import HouseHand from './components/HouseHand';
import Messages from './components/Messages';
import PlayerHand from './components/PlayerHand';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>21</h1>
        <HouseHand />
        <Controls />
        <PlayerHand />
        <Messages />
      </div>
    </Provider>
  );
}

export default App;
