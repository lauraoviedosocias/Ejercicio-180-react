import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetallePersonaje = () => {

    const params = useParams()
    const [personaje, setPersonaje] = useState([])
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
            .then((res)=> res.json())
            .then((data)=> {
                setPersonaje(data)
                console.log(personaje)
            })       
        
        }, [])

    return (
        <div>
            <h1>Detalle personaje</h1>
            <article className="detalle">
                <h2>Nombre: {personaje.name} </h2>
                <h3>Status: {personaje.status}</h3>
                <img src={personaje.image} />

            </article>
        </div>
    )
}

export default DetallePersonaje;