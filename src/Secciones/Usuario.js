import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BarraTop from '../Componentes/barraTop';
import BarraBottom from '../Componentes/barraBottom'
import NativeSelects from '../Componentes/SeleccionInicial';
// import FormDialog from '../Componentes/login.js';
// import {makeStyles, useStyles} from '@material-ui/core';
// import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles';


const Usuario = ()=> {
    return (
<div>
    <div>
        <BarraTop/>
    </div>
        <div className="App-body">
        <img src="../venta-de-autos1.jpg" alt="img1"className="App-img" width="383" height="115"/>
        <h3>Que estas buscando?</h3>
            <div className="Botones"> 
                <NativeSelects />
            </div>
        </div>
    <div>
    <BarraBottom />
    </div>
</div>
)
}

export default Usuario