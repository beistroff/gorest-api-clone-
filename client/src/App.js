import React from "react"
import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { HomePage } from "./pages/HomePage"
import { Header } from './components/Header'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { CreateUser } from './pages/CreateUser'
import { fetchAuthMount, isAuth } from "./redux/slices/auth"

function App () {
    const dispatch = useDispatch();
    const isAuthSelector = useSelector(isAuth);

    React.useEffect(() => {
        dispatch(fetchAuthMount());
    }, [])

    return (     
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/users" element={<CreateUser />} />
            </Routes>
        </>
    ) 
}

export default App