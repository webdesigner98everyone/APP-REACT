import React, {Component} from 'react';
import Cookies from 'universal-cookie';

// instanciamos la clase de las cookies
const cookies = new Cookies();

class Menu extends Component {
    // Metodo para cerrar Sesion y borrar cookies
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido', {path: "/"});
        cookies.remove('apellido2', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        // redireccionamos a la pagina de login una vez cerremos nuestra sesion 
        window.location.href="./";
    }

    dropdown=()=>{
        // redireccionamos a la pagina de del dropdown
        window.location.href="/dropdown";
    }

    // lo que tratamos de hacer con esto es que no nos deje pasar al login una vez estemos ya logueados
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }
    render(){
        console.log('id: '+cookies.get('id'));
        console.log('apellido: '+cookies.get('apellido'));
        console.log('apellido2: '+cookies.get('apellido2'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        return (
            <div className = "containerSecundario">
                <br/>
                <button class = "btn btn-primary" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                <br/><br/>
                <button class = "btn btn-primary" onClick={()=>this.dropdown()}>Dropdown</button>
            </div>
        );
    }
}
export default Menu;