import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BarraTop from '../Componentes/barraTop';
import BarraBottom from '../Componentes/barraBottom'
import ResultSelects from '../Componentes/SeleccionResult';
// import FormDialog from '../Componentes/login.js';
// import {makeStyles, useStyles} from '@material-ui/core';
// import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles';


const SearchResult = ()=> {
    return (
<div>
    <div>
        <BarraTop/>
    </div>
        <div className="App-body">
        <img src="../clio1.jpg" alt="imgb"className="App-imgB"/>
        <div className="ResultadoBusqueda">
            <p>Renault - Clio - 5pts 1.2 2017
                117.000 Km
            </p>
        </div>
            <div > 
                <ResultSelects />
            </div>
        </div>
    <div>
    <BarraBottom />
    </div>
</div>
)
}

export default SearchResult