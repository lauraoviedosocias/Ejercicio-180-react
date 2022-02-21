import { useState, useEffect } from "react";


const Busqueda = ({handleChange, handleClick}) => {






    return (
        <div className="container-input">
            <label>Buscar un personaje:</label>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Buscar</button>
        </div>
    )
}

export default Busqueda;