import logo from './logo.svg';
import './App.css';
import AddPeople from './components/AddPeople';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddPeople/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Delete' element={<Delete/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
      </Routes></BrowserRouter>

    </div>


  );
}

export default App;
