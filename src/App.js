import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
    <Router>
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/register" element = {<Register/>}></Route>
      </Routes>
    </Router>


    </div>
  );
}

export default App;