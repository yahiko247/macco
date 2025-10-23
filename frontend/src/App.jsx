
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/loginpage/loginpage'
import Page from './components/page/page'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>} ></Route>
          <Route path='/page' element={<Page/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
