import {Routes, Route} from 'react-router-dom'
import PrivateRoute from './utils/router/PrivateRoute';
import Home from './pages/home';
import Login from './pages/auth/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />}/>
        </Route>

        <Route path='login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
