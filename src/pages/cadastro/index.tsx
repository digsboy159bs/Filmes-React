import React from 'react';
import Header from '../../components/header/index';
import Input from '../../components/input/index'
import Button from '../../components/button/index'
import Footer from '../../components/footer';


function Cadastro(){
return (
    <div>
        <Header description="Faça o cadastro para acessar a coletanea"/>
        <div className="centro">
                <div className="cadastro">
                    <h1>Cadastro</h1>
                    <Input type="text" name="email" label="Email"/>
                    <Input type="text" name="telefone" label="Telefone"/>
                    <Input type="date" name="data" label="Data de Nascimento"/>
                    <Input type="password" name="senha" label="Senha"/>
                    <Button type="submit" name="Cadastrar"/>
                </div>
            </div>
                <Footer/>
 </div>
)
	}
	export default Cadastro;