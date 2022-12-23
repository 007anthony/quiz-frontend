import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {

    const [index, setIndex] = useState(0);

    const navigate = useNavigate();

    useEffect(() => setIndex(props.index),[]);

    function onClick(event) {
        fetch("http://localhost:8080/game", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "quiz": props.quiz
            })
        })
        .then(response => response.json())
        .then(game => navigate("/game/" + game.id));
    }

    

    return(
        <div className="Card" onClick={onClick}>
            {console.log(props.quiz)}
            <div className="title">{props.quiz.name}</div>
            <div>created By</div>
            <h2>{props.quiz.createdBy.username}</h2>
        </div>
    );
}

export default Card;