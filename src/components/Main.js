import "./Main.scss";
import Card from "./Card"
import Busqueda from "./Busqueda";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Main = () => {

    const [personajes, setPersonajes] = useState([])
    const [valorDelInput, setValorDelInput] = useState("")
    const [valorBusqueda, setValorBusqueda] = useState("")


    const handleChange = (e) => {
        setValorDelInput(e.target.value)
    }

    const handleClick = () => {
        setValorBusqueda(valorDelInput)
        console.log(valorDelInput)
    }

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character?name=${valorBusqueda}`)
            .then((res)=> res.json())
            .then((data)=> {
                setPersonajes(data.results);
                console.log(valorBusqueda)
            })
    }, [valorBusqueda])

    return (
        <main className="main">
            <Busqueda
                handleChange={handleChange}
                handleClick={handleClick} />

            <div className="container-cards">         

            {personajes.map((personaje) => (
                    <Link to={`/${personaje.id}`}>
                        <Card
                            image={personaje.image}
                            name={personaje.name}
                            status={personaje.status}
                            origin={personaje.origin.name}
                            location={personaje.location.name} />
                    </Link>
                )

                )

            }
            </div>       

        </main>
    )
}

export default Main;
