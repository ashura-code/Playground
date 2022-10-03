import {Route,Routes} from 'react-router-dom';
import About from  './about';
import Home from './home';


function App() {
  return (
    <div>
    <Routes>

   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>



    </Routes>


    
</div>
    
  );
}

export default App;
