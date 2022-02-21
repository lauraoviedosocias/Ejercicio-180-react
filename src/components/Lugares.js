import { useState, useEffect } from "react";
import Card from "./Card";



const Lugares = () => {

    const [lugares, setLugares] = useState([])

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/location`)
            .then((res)=> res.json())
            .then((data)=> {
                setLugares(data.results);
            })
    }, [])


    return (
        <div className="main">
            <h1>Somos los lugares</h1>
            <div className="container-cards">

            {
                lugares.map((lugar)=> (
                    <Card
                        image={lugar.image}
                        name={lugar.name}/>
                ))
            }
            </div>
        </div>
    )
}

export default Lugares;