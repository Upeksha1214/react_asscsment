import React, {Component, Fragment} from "react";

import {Grid} from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/navBar";


function DashBoard() {



    return (
        <>

            <NavBar/>

            <Grid style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
                <Row style={{marginLeft: '200px'}}>
                    <Col>
                        <Grid style={{
                            alignContent: 'center',
                            height: '300px',
                            width: '456px',
                            background: 'gray',
                            fontSize: '23px'
                        }}>
                            <h1>Products</h1>
                            <h1>60</h1>
                        </Grid>
                    </Col>

                    <Col>
                        <Grid style={{
                            height: '300px',
                            width: '456px',
                            background: 'gray',
                            marginLeft: '4px',
                            fontSize: '23px'
                        }}>
                            <h1>Users</h1>
                            <h1>60</h1>
                        </Grid>
                    </Col>
                </Row>

                <Row style={{marginLeft: '150px'}}>
                    <Col>
                        <Grid style={{height: '300px', width: '456px', background: 'gray', fontSize: '23px'}}>
                            <h1>Cart</h1>
                            <h1>60</h1>
                        </Grid>
                    </Col>


                </Row>

            </Grid>


        </>
    )

}

export default DashBoard;