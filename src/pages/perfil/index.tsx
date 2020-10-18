import React from 'react';
import Header from '../../components/header/index';
import Input from '../../components/input/index'
import Button from '../../components/button/index'
import Footer from '../../components/footer';


function Perfil(){
return (
    <div>
        <Header description="Edite seu perfil com liberdade"/>
        <div className="centro">
                <div className="perfil">
                    <h1>Perfil</h1>
                    <Input type="text" name="email" label="Email"/>
                    <Input type="text" name="telefone" label="Telefone"/>
                    <Input type="date" name="data" label="Data de Nascimento"/>
                    <Input type="password" name="senha" label="Senha"/>
                    <Button type="submit" name="Editar"/>
                    <Button type="submit" name="Salvar"/>
                </div>
            </div>
                <Footer/>
 </div>
)
	}
	export default Perfil;