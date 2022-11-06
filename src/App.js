import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Jobs from './components/Jobs/Jobs';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <div className="App">
    <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      <Route path='/jobs' element={<Jobs></Jobs>}></Route>
        <Route path='/payment' element={<Payment></Payment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
