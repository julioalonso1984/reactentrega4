import React from 'react'
import Logo from "../../Assets/Imagen/logo.jpg"
import Carrito from './Carrito'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary text-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} alt="" className='logoEmpresa' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">¿Quienes Somos?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contactanos</a>
                        </li>
                        
                    </ul>
                    <span className="d-flex">
                        <Carrito />
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
