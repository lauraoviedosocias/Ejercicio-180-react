import { useState, useEffect } from "react";
import Card from "./Card";



const Episodios = () => {

    const [episodios, setEpisodios] = useState([])

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/episode`)
            .then((res)=> res.json())
            .then((data)=> {
                setEpisodios(data.results);
            })
    }, [])


    return (
        <div className="main">
            <h1>Somos los episodios</h1>
            <div className="container-cards">

            {
                episodios.map((episodio)=> (
                    <Card
                        image={episodio.image}
                        name={episodio.name}/>
                ))
            }
            </div>
        </div>
    )
}

export default Episodios;