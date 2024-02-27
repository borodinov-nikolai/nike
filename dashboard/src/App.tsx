import { Provider } from 'react-redux';
import { store } from './shared/store/store';
import Router from './router';



function App() {

  return (
    <div className="App">
      <Provider store={store} >
      <Router/>
      </Provider>
    </div>
  );
}

export default App;
