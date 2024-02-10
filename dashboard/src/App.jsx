
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SettingsPage from './pages/index.tsx'
import HomePage from './pages/home.tsx'

function App() {
  return (
    <div className="App">
        <BrowserRouter basename='/admin' >
        <Routes>
      <Route exact path='/' element={<HomePage/> }  />
      <Route path='/settings' element={<SettingsPage/> }  />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
