import SignIn from './pages/authentication/SignIn';
import './App.css';
import Home from './pages/home/home';
import Filter from './pages/home/filters';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Result from './pages/home/result';
import Admin from './pages/admin/admin';
import Create from './pages/admin/create/create';
import Update from './pages/admin/update/update';



function App() {
  


  return (
    <Router>
    <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/district" element={<Filter/>}></Route>
          <Route path="/result" element={<Result/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/update" element={<Update/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
