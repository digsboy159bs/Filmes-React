import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/button/index';
import Input from '../../components/input';
 
 
import imgRefresh from '../../assets/images/refresh.png';
import imgTrash from '../../assets/images/trash.png';
import imgTheater from '../../assets/images/theater.png';
import '../../assets/styles/global.css';
import './style.css';
 
function Genero() {
  //prop string genero {get; set;} = "";
  const [idGenero, setIdGenero] = useState(0);
  const [genero, setGenero] = useState('');
 
  const [generos, setGeneros] = useState([]);
  
  //useEffect te permite executar efeitos colaterais em componentes funcionais
  //Buscar dados é um exemplo de efeito colateral
  //usando o useEffect informo ao React que o componente somente depois da renderização
  //é executado depois da renderização do componente, quando ele já estiver montado na DOM
  useEffect(() => {
    listar();
  }, []);
 
  const listar = () => {
    fetch('http://localhost:5000/api/generos', {
      method: 'GET',
      headers: {
        //Bearer authentication é o token authentication, um Schema para autenticação HTTP 
        //O Bearer identifica recursos protegidos por um OAuth2.
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(dados => {
        setGeneros(dados);
      })
      .catch(err => console.error(err));
  }
 
  const trash = (id: number) => {
    if (window.confirm('Deseja excluir o Genero?')) {
      fetch('http://localhost:5000/api/generos/' + id, {
        method: 'DELETE',
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token-filmes')
        }
      })
        .then(response => response.json())
        .then(dados => {
          listar();
        })
        .catch(err => console.error(err));
    }
  }
 
  const refresh = (id: number) => {
    fetch('http://localhost:5000/api/generos/' + id, {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(dados => {
        setIdGenero(dados.idGenero);
        setGenero(dados.nome);
      })
      .catch(err => console.error(err));
  }
 
  const salvar = () => {
    const form = {
      nome: genero
    };
 
    const method = (idGenero === 0 ? 'POST' : 'PUT');
    const urlRequest = (idGenero === 0 ? 'http://localhost:5000/api/generos' : 'http://localhost:5000/api/generos/' + idGenero);
 
    fetch(urlRequest, {
      method: method,
      body: JSON.stringify(form),
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
      }
    })
      .then(() => {
        alert('Genero cadastrado');
        setIdGenero(0);
        setGenero('');
        listar();
      })
      .catch(err => console.error(err));
  }
 
  return (
    <div>
      <Header description="Cadastre os Gêneros dos Filmes" />
 
    <main>
      <h1>Gênero</h1>
      <div className="imgTitulo">
      <img className="theater" src={imgTheater} alt=""/>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Gênero</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            generos.map((item: any) => {
              return (
                <tr key={item.idGenero}>
                  <td>{item.idGenero}</td>
                  <td>{item.nome}</td>
                  <td>
                    <img className="icon" src={imgRefresh}  onClick={() => refresh(item.idGenero)} alt="" />
                    <img className="icon" src={imgTrash}  onClick={() => trash(item.idGenero)} alt="" />
                    {/* <input type="button" onClick={() => editar(item.idGenero)} /> */}
                    {/* <input type="button" onClick={() => remover(item.idGenero)} /> */}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
 
      <form onSubmit={event => {
        event.preventDefault();
        salvar();
      }}>
        <div className="form">
        <Input name="genero" label="Cadastrar genero" value={genero} onChange={e => setGenero(e.target.value)}/>
        <div className="btn">
        <Button type="submit" name="Enviar" value="Salvar"/>
        </div>
        </div>
      </form>
      </main>
      <Footer/>
      
    </div>
 
  );
}
 
export default Genero;
