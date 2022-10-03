import {Route,Routes} from 'react-router-dom';
import About from  './about';
import Home from './home'; 


function App() {
  return (
    <div>
      <nav><h2>Dont mind me, im the nav btw..</h2></nav>
    <Routes>

   <Route path="/wow" element={<Home/>}>
     <Route path="abou" element={<div> <h1>This is rendered fpfv dfknvdv</h1></div>}></Route>
   </Route>

   
    <Route path="/about" element={<About/>}/>

    <Route path="*" element={<center><h1>There may be an typo in your address,,please check it </h1></center>}/>



   
   

    </Routes>


    
</div>
    
  );
}

export default App;
