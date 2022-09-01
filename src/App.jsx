import './assets/styles/App.css';
import Home from './components/pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/pages/NotFound';
import NavBar from './components/widgets/NavBar';
import Footer from './components/widgets/Footer'


const App = ()=> {
  
  return (
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
