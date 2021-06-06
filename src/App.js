import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  } from 'react-router-dom';
import Initial from './Secciones/Initial';
import Usuario from './Secciones/Usuario'
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles';

const Style = createMuiTheme({
    palette:{
        primary:{
            main: '#000'
        },
        secondary:{
            main: '#999'
        }
    }
})

function App() {
  return(
    <ThemeProvider theme={Style}>
      <Router>
         <Switch>
         {/* <Route path="Secciones/">
              <Carrito />
          </Route> 
          <Route path="/Secciones/PostVenta">
              <PostVenta />
          </Route>
          <Route path="/Secciones/Venta1">
              <Venta1 />
          </Route>
          <Route path="/Secciones/Venta">
              <Venta />
          </Route>

          <Route path="/Secciones/Tradicional">
              <Tradicional />
          </Route>
          
          <Route path="/Secciones/Planes">
              <Planes />
          </Route>

          <Route path="/Secciones/Administracion">
              <Administracion />
          </Route>

          <Route path="/Secciones/Visitante">
              <Visitante />    
          </Route>

          */}
         <Route path="/Secciones/Usuario">
              <Usuario />
          </Route>

          <Route path="/">
              <Initial />
          </Route>

         </Switch>
      </Router>
    </ThemeProvider>
      
  );
}

export default App;
