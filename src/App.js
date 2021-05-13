import { Provider } from "react-redux";

import "./App.css";
import Cards from "./components/Cards";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>21</h1>
        <Cards />
      </div>
    </Provider>
  );
}

export default App;
