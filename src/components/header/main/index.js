import React from 'react';
import Typography from '@material-ui/core/Typography';
import GroupHeader from './../GroupHeader/index';
import Research from './../ResearchInput/index';
import Logo from './../logo/index';
import './index.css'
export default function Main(props){
    return(
        <div className="header">
            {/* <Research/> */}
            <Logo/>
            <GroupHeader NomePessoa={props.NomePessoa}/>
        </div>
    )
}