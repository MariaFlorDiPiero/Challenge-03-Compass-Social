import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'


function AppRouter (){

    return <Router>
        <Routes>
            <Route path="/" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
    </Router>
}

export default AppRouter;