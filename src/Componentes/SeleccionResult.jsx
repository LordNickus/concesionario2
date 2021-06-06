import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    // minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));

export default function ResultSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    marca: '',
    modelo: '',
    version: '',
    año: '',
    kilometraje: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="Botones">
      <div >
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-marca-native-simple">Precio</InputLabel>
        <Select
          native
          value={state.marca}
          onChange={handleChange}
          label="Marca"
          inputProps={{
            name: 'marca',
            id: 'outlined-marca-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Peugeot</option>
          <option value={20}>Ford</option>
          <option value={30}>Citroen</option>
          <option value={40}>Fiat</option>
          <option value={50}>Volkswagen</option>
          <option value={60}>Chevrolet</option>
        </Select>
      </FormControl>
     
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-modelo-native-simple">Financiacion</InputLabel>
        <Select
          native
          value={state.modelo}
          onChange={handleChange}
          label="Modelo"
          inputProps={{
            name: 'modelo',
            id: 'outlined-modelo-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ka</option>
          <option value={20}>Palio</option>
          <option value={30}>308</option>
          <option value={40}>Picasso</option>
          <option value={50}>Onix</option>
          <option value={60}>Gol</option>
        </Select>
      </FormControl>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-version-native-simple">Reventa</InputLabel>
        <Select
          native
          value={state.version}
          onChange={handleChange}
          label="Version"
          inputProps={{
            name: 'version',
            id: 'outlined-version-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Base</option>
          <option value={20}>CasiCompleto</option>
          <option value={30}>Full</option>
          <option value={40}>SuperFull</option>
          </Select>
      </FormControl>
            
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-año-native-simple">Peritaje</InputLabel>
        <Select
          native
          value={state.año}
          onChange={handleChange}
          label="Año"
          inputProps={{
            name: 'año',
            id: 'outlined-año-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>2000 - 2005</option>
          <option value={20}>2005 - 2010</option>
          <option value={30}>2010 - 2015</option>
          <option value={30}>2015 - 2020</option>
        </Select>
      </FormControl>
      
      </div>
      
    </div>
  );
}
