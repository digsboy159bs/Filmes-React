import React from 'react';
import Header from '../../components/header/index';
import '../../assets/styles/global.css'
import cinema from '../../assets/images/cinema.png'
import theater from '../../assets/images/theater.png'
import Footer from '../../components/footer/index'
import './style.css'

function Home(){
return (
    <div>
        <Header description="Conheça nossa Coletânea" text="Olá, tudo bem"/>
        <main>
        <div className="container">
            <div>
                <h1>Monte sua coletânea de filmes...</h1>
            </div>
        </div>
        
        <div className="text">
                <h3>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</h3>

                <h4>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. 
                </h4>
        </div>

        <div className="group">

          <div className="part1">
          <img src={cinema} alt="Logo cinema"/>
          <h3>Filmes</h3>
          <h4>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut
            labore  aliquip ex ea commodo consequat.
          </h4>
          </div>

          <div className="part2">
          <img src={theater} alt="Mascara de teatro"/>
          <h3>Categorias</h3>
          <h4>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut
            labore  aliquip ex ea commodo consequat.
          </h4>
          </div>
        </div>


    </main>
        <Footer/>
    </div>
)
	}
	export default Home;