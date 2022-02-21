import "./Card.scss";

const Card = ({image, name, status, origin, location}) => {
    return (
        <div className="card">
            <img src={image}/>
            <h3>{name}</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Origin: {origin}</li>
                <li>Location: {location}</li>
            </ul>

        </div>
    )
}

export default Card;