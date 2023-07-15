import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li> 
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="http://localhost:3000/auth/google">Log in</Link>
                </li> 
            </ul>
        </nav>
    )
}

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