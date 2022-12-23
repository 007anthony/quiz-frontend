import { useEffect, useState } from "react";
import {useParams, Navigate} from "react-router-dom";
import QuizItem from "./QuizItem";

function Quiz(props) {

    const [game, setGame] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/game/" + id, {
            method:"GET"
        })
        .then((response) => response.json())
        .then((r) => setGame(r))
    }, []);

    return(
        <div className="Quiz">
            {game != null? <QuizItem question={game.quiz.questions[0]} id={id} onClick={() => console.log("test")}/>: null}
        </div>
    );
    
}
export default Quiz;