import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Main from '/pages/Main'
// import Shop from '/pages/Shop'
import CourseHome from '/pages/CourseHome'
// import UI from '/pages/UI'
// import ComputerGraphics from '/pages/ComputerGraphics'
import 'bootstrap/dist/css/bootstrap.min.css'
import Assignments from '/pages/Assignments'
import Shop from '/pages/Shop'
import Zoom from '../components/Zoom'

function App() {

  return(
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/courses/:course" element={<CourseHome />} />
          {/* <Route path="/courses/ui" element={<UI />} />
          <Route path="/courses/computer-graphics" element={<ComputerGraphics />} /> */}
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/courses/:course/zoom" element={<Zoom />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/courses/ui/zoom" element={<Zoom />} />
          <Route path="/courses/computer-graphics/zoom" element={<Zoom />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
