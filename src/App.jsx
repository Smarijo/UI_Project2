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
import Files from '/pages/Files'
import Grades from '/pages/Grades'
import Modules from '/pages/Modules'
import Announcements  from "../pages/Announcements";
import TurnIn from "../pages/TurnIn";

function App() {

  return(
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/courses/:course" element={<CourseHome />} />
          <Route path="/courses/:course/assignments" element={<Assignments />} />
          <Route path="/courses/:course/zoom" element={<Zoom />} />
          <Route path="/courses/:course/grades" element={<Grades />} />
          <Route path="/courses/:course/files" element={<Files />} />
          <Route path="/courses/:course/modules" element={<Modules />} />
          <Route path="/courses/:course/announcements" element={<Announcements />} />
          <Route path="/courses/:course/assignments" element={<Assignments />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/turnIn" element={<TurnIn />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
