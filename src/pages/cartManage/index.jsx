import React, {Component} from "react";
import {Grid, Typography} from "@mui/material";
import {ValidatorForm} from "react-material-ui-form-validator";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";

class CartManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: [
                { title: 'The Shawshank Redemption', year: 1994 },
                { title: 'The Godfather', year: 1972 },
                { title: 'The Godfather: Part II', year: 1974 },
                { title: 'The Dark Knight', year: 2008 },
                { title: '12 Angry Men', year: 1957 },
                { title: "Schindler's List", year: 1993 },
                { title: 'Pulp Fiction', year: 1994 }
            ],


        }
    }
    render() {
        return(
            <>
                <ValidatorForm ref="form">
                    <Grid container spacing={1}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="body1"><b><h1>Cart Manage</h1></b></Typography>
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Name</h3></Typography>
                            <Autocomplete
                                multiple
                                id="checkboxes-tags-demo"
                                options={this.state.name}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.title}
                                renderOption={(props, option, { selected }) => (
                                    <li {...props}>
                                        <Checkbox
                                            icon={this.state.icon}
                                            checkedIcon={this.state.checkedIcon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.title}
                                    </li>
                                )}
                                style={{ width: 500 }}
                                renderInput={(params) => (
                                    <TextField {...params} style={{width:"100%"}} />
                                )}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Date</h3></Typography>
                            <TextField
                                id="datetime-local"
                                label="PickUp Date And Time"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                style={{width:"100%"}}
                                onChange={(e) =>{


                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Product Titile</h3></Typography>
                            <Autocomplete
                                multiple
                                id="checkboxes-tags-demo"
                                options={this.state.name}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.title}
                                renderOption={(props, option, { selected }) => (
                                    <li {...props}>
                                        <Checkbox
                                            icon={this.state.icon}
                                            checkedIcon={this.state.checkedIcon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.title}
                                    </li>
                                )}
                                style={{ width: 500 }}
                                renderInput={(params) => (
                                    <TextField {...params} style={{width:"100%"}} />
                                )}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Qty</h3></Typography>
                            <TextField  style={{width:"100%"}} />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{ display: 'flex' }} justifyContent="flex-end" alignItems="flex-end" direction="row" ontainer marginTop={"10px"} >
                            <Button size="small" variant="contained" color={"warning"} style={{marginRight:"10px"}}>Clear</Button>
                            <Button size="small" variant="contained" style={{marginRight:"10px"}}>Save</Button>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </>
        );
    }
}
export default CartManager