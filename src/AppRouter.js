import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login'


function AppRouter (){

    return <Router>
        <Routes>
            <Route path="/" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </Router>
}

export default AppRouter;