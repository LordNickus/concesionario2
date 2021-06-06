import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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

export default function NativeSelects() {
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
    <div>
      <Box width={1} bgcolor="info.main">
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-marca-native-simple">Marca</InputLabel>
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
        <InputLabel htmlFor="outlined-modelo-native-simple">Modelo</InputLabel>
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
        <InputLabel htmlFor="outlined-version-native-simple">Version</InputLabel>
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
        <InputLabel htmlFor="outlined-año-native-simple">Año</InputLabel>
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
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-kilometraje-native-simple">Kilometraje</InputLabel>
        <Select
          native
          value={state.kilometraje}
          onChange={handleChange}
          label="Kilometraje"
          inputProps={{
            name: 'kilometraje',
            id: 'outlined-kilometraje-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Hasta 50.000 Km</option>
          <option value={20}>Desde 50.000 Km Hasta 80.000 Km</option>
          <option value={30}>Desde 80.000 Km Hasta 100.000 Km</option>
          <option value={30}>Desde 100.000 Km Hasta 150.000 Km</option>
        </Select>
      </FormControl>
      </Box>
      <div className="Botones">
      <Button variant="contained" color='secondary'>Buscar</Button>
      </div>
    </div>
  );
}
