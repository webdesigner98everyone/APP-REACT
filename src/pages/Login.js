import React, {Component} from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import cabezote from '../css/cabezote.png';

//Conexion a la api creada
const baseUrl="http://localhost:3001/usuarios";
// instanciamos la clase de las cookies
const cookies = new Cookies();

class Login extends Component {
    // nombre de los inputs
    state = {
        form:{
            username: '',
            password: ''
        }
    }
    // en este metodo guardamos el estado del input de acuerdo a su nombre
    handleChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        // mostramos en consola la captura
         console.log(this.state.form);
    }

    // Metodo para iniciar sesion en nuestra api
    iniciarSesion=async()=>{
        await axios.get(baseUrl,{params:{username: this.state.form.username, password: md5(this.state.form.password)}})
        // validamos nuestra conexion a la api si es de forma satisfactorio o si existe algun error y que este se muestre en consola
        .then(response=>{
            // console.log(response.data);
            return response.data;
        })
        .then(response=>{
            // validamos si la longitud es cero ya que encontro un usuario y un pass que coinciden con el api
            if(response.length > 0){
                // si el usuario es correcto almacemos cookies
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path:"/"});
                cookies.set('apellido', respuesta.apellido, {path:"/"});
                cookies.set('apellido2', respuesta.apellido2, {path:"/"});
                cookies.set('nombre', respuesta.nombre, {path:"/"});
                cookies.set('username', respuesta.username, {path:"/"});
                // mensaje de bienvenida 
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
                // Redirigimos una vez sea logueado el user
                window.location.href="./menu";
            }else{
                alert('El usuario y/o contraseña Son incorrectas');
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

     // lo que tratamos de hacer con esto es que no nos deje pasar al menu sin iniciar sesion
    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    render(){
        return (
            <section class="login-block">
                <div class="container">
                        <div class="row">
                            <div class="col-md-4 login-sec">
                                <img src={cabezote} id="icon" alt="User Icon" />
                                <h2 class="text-center">Secretaria de Salud</h2>
                                <p>Ingrese sus datos para iniciar Sesión</p>
                                <form class="login-form">
                                    <div class="form-group">
                                        <label class="text-uppercase">Usuario</label>
                                        <input type="text" className="form-control" placeholder="Nombre De Usuario" name = "username" onChange={this.handleChange}/>
                                    </div>
                                    <div class="form-group">
                                        <label  class="text-uppercase">Contraseña</label>
                                        <input type="password" className="form-control" placeholder="password"  name = "password" onChange={this.handleChange}/>
                                    </div>
                                    <br/>
                                    <div class="form-check">
                                        <button class = "btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Session</button>
                                    </div>
                                </form>
                                <div class="copy-text">¿Olvidaste Tu Contraseña?<a href="#"> Recuperala AQUI</a></div>
                            </div>
                            <div class="col-md-8 banner-sec">
                                    <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item active">
                                        </div>
                                    </div>  
                            </div>
                        </div>
                </div>
            </section>
        );
    }
}
export default Login;