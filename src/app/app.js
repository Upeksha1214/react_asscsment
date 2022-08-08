import React, {useState} from "react";
import Login from "../pages/login";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import UserForm from "../pages/user";
import Product from "../pages/productManager";
import CartManager from "../pages/cartManage";
import PrivateRoute from "../parivateRoute";


function App() {
    const [isLogged,setIsLogged] =useState(false)
    const [token,setToken] =useState(true)

    const ChangeState=() =>{
        setIsLogged(true);
    }
    return (
        <Router>
        <Routes>

            <Route element={<PrivateRoute isLogged={isLogged}/>}>
                <Route  path="/userForm" element={<UserForm/>}></Route>
            </Route>
            <Route path ="/" element={<Login setLogged={ChangeState}/>}/>

        </Routes>
        </Router>

    );
}

export default App;