import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from '/pages/Home'
import Senior_Design from '/pages/Senior_Design'
import UI from '/pages/UI'
import Computer_Graphics from '/pages/Computer_Graphics'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return(
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses/senior-design" element={<Senior_Design />} />
          <Route path="/courses/ui" element={<UI />} />
          <Route path="/courses/computer-graphics" element={<Computer_Graphics />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
