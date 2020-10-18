import React, {useState} from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index'
import Input from '../../components/input/index';
import '../../assets/styles/global.css';
import Button from '../../components/button/index';
import {useHistory} from 'react-router-dom';


function Login(){

    let history = useHistory()

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const login = () => {
        const login = {
            email: email,
            senha: senha
        }

        fetch('http://localhost:5000/api/conta/login', {
                method: 'POST',
                body: JSON.stringify(login),
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then (response=>response.json())
        .then (dados=>{
            if (dados.token !== undefined) {
            localStorage.setItem('token-filmes',dados.token)
            history.push('/');
            }else{
                alert(dados)
            }

        })
        .catch(error=>console.error(error))
    }
    

    return(
        <div>
            <Header description=" Faça o login para acessar a coletanea"/>
            <div className="centro">
                <div className="login">
                    <h1>Login</h1>
                    <form onSubmit={event=>{
                        event.preventDefault()
                        login()
                    }} >
                    <Input type="text" name="email" label="E-mail" onChange={e => setEmail(e.target.value)} />
                    <Input type="password" name="senha" label="Senha" onChange={e => setSenha(e.target.value)} />
                    <Button type="submit" name="Enviar"/>
                    </form>
                </div>
            </div>
            
            
            <Footer/>
            
        </div>

    ) 
}

export default Login;