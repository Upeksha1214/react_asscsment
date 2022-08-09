import React, {useEffect, useState} from "react";
import withStyles from "@material-ui/styles/withStyles";
import {styleSheet} from "./style";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {Navigate} from "react-router";
import GetCookie from "../../hooks/getCookies";
import SetCookie from "../../hooks/setCokkies";
import adminService from "../../services/adminService/adminService";

function Login(props) {
    const [isLogin,setLogin]=useState(false)
    const [userName,setUseName]=useState("")
    const [password,setPassword]=useState("")
    const {classes} =props;

    const [token,setToken]=useState(false)

    const loginUser=async () =>{
        const userAcc={
            username : userName,
            password : password
        }
        let response =await adminService.login(userAcc);
        if (response.status==200){
            SetCookie("loginToken",response.data.token)
            props.setLogged()
            setLogin(true)
        }else{
            alert("userName Or password Incorrect")
        }
    }


    const checkTokenValidity=() =>{

        if (GetCookie("MyToken")!=undefined) {
            setToken(true)
        }
    }

    const loadingDashBoard=() =>{
        props.setLogged()
        return <Navigate to="/dashBoard" replace={true} />
    }

    useEffect(() =>{
        checkTokenValidity()
    },[])


    return (
        token ? loadingDashBoard() :

        isLogin ? <Navigate to="/dashBoard" replace={true}/> :


        <div className={classes.container}>
            <div className={classes.login__cover}>
                <div className={classes.title__container}>
                    <Typography variant="h4">Login</Typography>
                </div>
                <div className={classes.form__container}>
                    <TextField
                        id="outlined-basic"
                        label="User name"
                        variant="outlined"
                        onChange={(e)=>{
                            setUseName(e.target.value)
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        type="password"
                        label="Password"
                        variant="outlined"
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <div className={classes.btn__container}>
                    <Button variant="contained" type="submit" className="primary"
                            onClick={async () =>{
                                await loginUser()
                            }}
                    >Login</Button>
                </div>
                <Typography variant="h5" style={{marginTop: "-30px"}}>Create new user
                    account? </Typography>

            </div>
        </div>
    )

}
export default withStyles(styleSheet)(Login)