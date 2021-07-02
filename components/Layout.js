import React from 'react'
import Link from 'next/link'
import {Container, Nav, Form, Button, Navbar, Card, FormControl, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from 'react'
import styles from '../styles/Layout.module.css'


const navStyle = {
    marginRight: '4vw'
}

const firstNavStyle = {
    marginRight: '4vw',
    marginLeft: '17vw'
}

function Layout({children}) {

  
    return (
      <div>
          <h1 style = {{marginLeft: '45vw'}}>Noisetier</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">

                    <li className="nav-item" style={firstNavStyle}>
                    <a className="nav-link" href="#">Beauty</a>
                    </li>
                    
                    <li className="nav-item dropdown" style={navStyle}>
                    <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Еда
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown" style={navStyle}>
                    <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Digital
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown" style={navStyle}>
                    <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Путешествия
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown" style={navStyle}>
                    <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Lifestyle
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item" style={navStyle}>
                    <a className="nav-link" href="#">Шопинг</a>
                    </li>
                    <li className="nav-item" style={navStyle}>
                    <a className="nav-link" href="#">Anastasia Volkova</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <hr></hr>
        <div>
            {children}
        </div>


        <footer>
            <hr className = 'w-75' style = {{marginLeft: '12.5vw', height: 1.5, borderColor:'black' }}></hr>

        </footer>
      </div>
    )
}

export default Layout
