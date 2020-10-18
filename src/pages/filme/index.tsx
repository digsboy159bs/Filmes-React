import React from 'react';
import Header from '../../components/header/index';
import Input from '../../components/input/index'
import Button from '../../components/button/index'
import Footer from '../../components/footer';
import cinema from '../../assets/images/cinema.png'
import './style.css'


function Filme() {

    

    return (
        <div>
            <Header description="Cadastre filmes para os filmes" />
            <div className="centro">
                <div className="filme">
                    <h1>Cadastro de filmes</h1>
                    <div className="imagem">
                        <img className="cinema" src={cinema}></img>
                    </div>
                    <section id="lista_filmes_flex">

                        <h1>Lista de Filmes</h1>
                        <section id="lista_generos">

                            <div id="titulo">
                                <ul>
                                    <li>filme</li>
                                    <li>filme</li>
                                    <li>filme</li>
                                </ul>
                            </div>


                        </section>

                    </section>
                    <div className="div-filme">
                        <Input type="text" name="email" label="Cadastre um filme" />
                        <Input type="text" name="genero" label="Genero do filme" />
                        <div className="botao">
                            <Button type="submit" name="Salvar" />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Filme;