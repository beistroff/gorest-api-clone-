import React from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

import { Header } from './components/Header';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { CreateUser } from './pages/CreateUser';

//const router = createBrowserRouter([{path: `/`, element: <HomePage />}])

function App () {
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

export default App;

// fetching data from backend 

// class App extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {apiResponse: ""};
//     }

//     callAPI() {
//         fetch("http://localhost:3000/test")
//         .then(res => res.text())
//         .then(res => this.setState({apiResponse: res}));
//     }

//     componentWillMount() {
//         this.callAPI();
//     }
    
//     render() {  
//         return (
//             <div>
//                 <Hero /> 
//                 <p>{this.state.apiResponse}</p>
//             </div>
//         );
//     }   
// }