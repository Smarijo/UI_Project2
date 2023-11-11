import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from '/pages/Home'
// import Shop from '/pages/Shop'
import SeniorDesign from '/pages/SeniorDesign'
import UI from '/pages/UI'
import ComputerGraphics from '/pages/ComputerGraphics'
import 'bootstrap/dist/css/bootstrap.min.css'
import Assignments from '/pages/Assignments'

function App() {

  return(
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses/senior-design" element={<SeniorDesign />} />
          <Route path="/courses/ui" element={<UI />} />
          <Route path="/courses/computer-graphics" element={<ComputerGraphics />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
