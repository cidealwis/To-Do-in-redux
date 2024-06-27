
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './view/Login.jsx/Login'
import SignUp from './view/SignUp.jsx/SignUp'
import TodoHome from './view/TodoHomePage/TodoHome'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/dashboard" element={<TodoHome/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
