
import Home from './home/Home'
import Create from './create/Create';
import Update from './update/update';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <>
    <Router>
     <Routes>
        <Route path="/" element={  <Home/>} >  </Route>
        <Route path="/create" element = {<Create />}></Route> 
        <Route path="/edit/:id" element= {<Update />}> </Route>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
