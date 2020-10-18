import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login/index'
import Cadastro  from './pages/cadastro/index'
import Perfil from './pages/perfil'
import Genero from './pages/genero'
import Filme from './pages/filme'

function Routers(){
    return(
        <BrowserRouter>
            <Route path= "/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/perfil" component={Perfil}/>
            <Route path="/genero" component={Genero}/>
            <Route path="/filmes" component={Filme}/>
        </BrowserRouter>
    )
}

export default Routers;