import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from '/pages/Home'
// import Shop from './pages/Shop'

function App() {

  return(
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
