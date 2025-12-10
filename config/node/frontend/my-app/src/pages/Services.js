import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

function Services(props) {
    return (<div>
        <div>Services</div>
        <Button className="services_button" variant="contained" size="large" component={Link} to="/map">PRZEJDŹ DO MAPY</Button>
        </div>
    );
}

export default Services;