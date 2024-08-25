import Navbar from "./Components/Navbar"
import {Routes,Route} from "react-router-dom"
import Create from "./Components/Create";
import Read from "./Components/Read"
import Update from "./Components/Update"



function App() {
 

  return (
    <div>
     <Navbar/>
     <Routes>

      <Route path="/" element={<Create/>}></Route>
      <Route path="/all" element={<Read/>}></Route>
      <Route path="/:id" element={<Update/>}></Route>

     </Routes>
     
    </div>
  )
}

export default App
