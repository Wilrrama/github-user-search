import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../Components/ButtonIcon';
import Navbar from '../../Components/Navbar';
import './styles.scss';



const Home = () => (

    <div >
        <Navbar />
                    <div className="text-title">
                <h1 > Desafio do Capítulo 3, <br />
        Bootcamp DevSuperior </h1>
            </div>
            <h1 className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br /><br />
        Favor observar as instruções passadas no capítulo sobre a
        elaboração deste projeto. <br /><br />
        Este design foi adaptado a partir de Ant Design System for Figma, de <br />
        Mateusz Wierzbicki: antforfigma@gmail.com
        </h1>
            <div className="btn-comecar">
               
                <Link to="/Search">
                    <ButtonIcon text="começar" />
                </Link>       
            </div>
        
    </div>



);

export default Home;