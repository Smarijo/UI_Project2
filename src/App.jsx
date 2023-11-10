import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from '/pages/Home'
import Senior_Design from '/pages/Senior_Design'
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
          {/* <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
