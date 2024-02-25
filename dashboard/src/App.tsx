import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages';
import AuthPage from './pages/auth';
import { Provider } from 'react-redux';
import { store } from './shared/store/store';



function App() {
  return (
    <div className="App">
      <Provider store={store} >
    <BrowserRouter basename='/admin' >
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/auth' Component={AuthPage} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
