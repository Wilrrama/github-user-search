import React from 'react';
import ButtonIcon from '../../Components/ButtonIcon';
import Navbar from '../../Components/Navbar';
import './styles.scss';

const Search = () => (
    <div className="btn-encontrar">
    <Navbar />
        <div className="search-container" >
           <h1 className="text-search-title"> Encontre um perfil Github</h1>
            <input className="input-config"/>
            <ButtonIcon  text="encontrar"  />
        </div>
     
    </div>

);

export default Search;