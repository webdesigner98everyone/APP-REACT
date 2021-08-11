import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

function Dropdow() {

        const [dropdown, setDropdown]=useState(false);
        const abrirCerrarDropdown=()=>{
            setDropdown(!dropdown);
        }
        return (
            <div className="containerSecundario">
                <br/> <br/> <br/> <br/> <br/> <br/>
                <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                        <DropdownToggle caret>
                            Seleccionar
                        </DropdownToggle>

                        <DropdownMenu>
                        <DropdownItem header>Seleccionar</DropdownItem>
                            <DropdownItem>ASEGURAMIENTO EN SALUD</DropdownItem>
                            <DropdownItem>VIGILANCIA EPIDEMIOLOGICA</DropdownItem>
                            <DropdownItem>INTEROPERABILIDAD CLAP</DropdownItem>
                        </DropdownMenu>
                </Dropdown> 
            </div>
        );
}
export default Dropdow;