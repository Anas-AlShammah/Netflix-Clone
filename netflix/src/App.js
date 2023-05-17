
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import FavList from './components/FavList';
import Navbar1 from './components/Navbar1';
function App() {
  return (
    <>
   <Navbar1></Navbar1>
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favlist' element={<FavList/>}> </Route>
    </Routes>
    </>
  );
}

export default App;
