import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route element={ <HomePage/>} path="/" exact/>
      <Route element={ <RegisterPage/>} path="/register" />
      <Route element={ <ProfilePage/>} path="/me" />
      <Route element={<LoginPage />} path="/login" />
      
      <Route element={ <NotFoundPage/>} path="*" />
    </Routes>
  )
}

export default App
