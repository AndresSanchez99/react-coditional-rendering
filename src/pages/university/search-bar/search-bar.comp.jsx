import React from 'react';
import './search-bar.styles.css';

const SearchBar = () => {
    return (
        
        <div className="search-bar-container">
            <div className="Searchbar-input">
                <input type="text" placeholder="Buscar por nombre"/> </div>
            <div>
            <input type ="radio" name='choice'/> Estudiantes aprobados <br/>
            <input type ="radio" name='choice'/> Estudiantes reprobados <br/>
            <input type ="radio" name='choice'/> Cualquiera
            </div>
            
        </div>
    );
    
}

export default SearchBar;