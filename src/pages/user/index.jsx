import React, {useState} from "react";
import {Button, Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import GDSESnackBar from "../../components/snackBar";
import PostService from "../../services/postService/PostService";
import {setSelectionRange} from "@testing-library/user-event/dist/utils";


function UserForm (props) {
     const [username,setUserName]=useState("")
     const [password,setPassword]=useState("")
     const [email,setEmail]=useState("")
     const [firstName,setFirstName]=useState("")
     const [lastName,setLastName]=useState("")
     const [city,setCity]=useState("")
     const [street,setStreet]=useState("")
     const [streetNo,setStreetNo]=useState("")
     const [zipCode,setZipCode]=useState("")
     const [latValue,setLatValue]=useState("")
     const [longValue,setLongValue]=useState("")
     const [mobileNo,setMobileNo]=useState("")

        /*this.state = {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                userName: '',
                password: '',
                city: '',
                street: '',
                streetNo: '',
                zipCode: '',
                latValue: '',
                longValue: '',
                mobileNo: ''
            },

            alert: false,
            message: '',
            severity: '',*/


     const saveCustomer  = async () =>{
       var customerDts ={
            "email":email,
            "username":username,
            "password": password,
            "name": {
            "firstname": firstName,
                "lastname": lastName
        },
            "address": {
            "city": city,
                "street": street,
                "number": streetNo,
                "zipcode": zipCode,
                "geolocation": {
                "lat": latValue,
                    "long": longValue
            }
        },
            "phone": mobileNo
        }
    }


        const handleSubmit = async () => {
        console.log(this.state.formData)
        let formData = this.state.formData
        let response = await PostService.createPost(formData);
        if (response.status===201){
            alert("Post Creates")
        }else{
            alert("un success")
        }
    }


        return (
            <>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing={1}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="body1"><b><h1>User Registration</h1></b></Typography>
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>First Name</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="First Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Last Name</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Last Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={lastName}
                                onChange={(e) => {
                                   setLastName(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Email</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Email"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={setEmail}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Username</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="User Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={setUserName}
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Password</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Password"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={setPassword}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>City</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="City"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={setCity}
                                onChange={(e) => {
                                    setCity(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Street</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Street"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={setStreet}
                                onChange={(e) => {
                                    setStreet(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Street No</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Street No"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={setStreetNo}
                                onChange={(e) => {
                                    setStreetNo(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Zip Code</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Zip Code"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={setZipCode}
                                onChange={(e) => {
                                    setZipCode(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Lat Value</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Lat Value"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={setLatValue}
                                onChange={(e) => {
                                    setLatValue(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Long Value</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Long Value"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={setLongValue}
                                onChange={(e) => {
                                    setLongValue(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Mobile No</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Mobile No"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={setMobileNo}
                                onChange={(e) => {
                                    setMobileNo(e.target.value)
                                }}
                                validators={['required']}
                            />
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end"
                          container marginTop={"10px"}>
                        <Button size="small" variant="contained" color={"warning"}
                                style={{marginRight: "10px"}}>Clear</Button>

                        <Button size="small" variant="contained" style={{marginRight: "10px"}} label="Save"
                                type="submit"
                                onClick={() =>{
                                    saveCustomer();
                                }}
                        >

                            Save</Button>
                    </Grid>
                </ValidatorForm>
                <Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">First Name</TableCell>
                                    <TableCell align="right">Last Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">User Name</TableCell>
                                    <TableCell align="right">Password</TableCell>
                                    <TableCell align="right">City</TableCell>
                                    <TableCell align="right">Street</TableCell>
                                    <TableCell align="right">Street No</TableCell>
                                    <TableCell align="right">Zip Code</TableCell>
                                    <TableCell align="right">Lat Value</TableCell>
                                    <TableCell align="right">Long Value</TableCell>
                                    <TableCell align="right">Mobile No</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
        );

}

export default UserForm
