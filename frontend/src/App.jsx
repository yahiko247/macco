
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/loginpage/loginpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
