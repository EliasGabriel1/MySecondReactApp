import React from 'react';
import Typography from '@material-ui/core/Typography';
import './index.css'
import DropdownOla from "./../Ola/DropdownOla/index"

export default function Ola(props){
    return(
        <Typography variant="body2" color="textSecondary" className="text-loggout" component="p">
            Olá, <a href="" className="PersonNAME">{props.NomePessoa}</a>
            <DropdownOla/>
        </Typography>
    )
}