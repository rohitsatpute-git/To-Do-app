
import './App.css';
import Home from './pages/Home.js'
import GoogleOA from './pages/goaut';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



function App(){
  return(
    <div>
    <Router> 
     <Routes> 
        <Route exact path='/'  element={<GoogleOA/>}/>     
        <Route path='/home' element={<Home/>}/>
      </Routes> 
     </Router> 
    </div>
  )
}


 export default App;
 