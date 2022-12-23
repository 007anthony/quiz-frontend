import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import Card from "./Card";
import Quiz from "./Quiz";

function Homepage() {

    const [quizzes, setQuizzes] = useState([]);
    let list = [];
    useEffect(() => {
        fetch("http://localhost:8080/quiz/all", {
            method: 'GET'
        }).then(response => response.json().then(quizzes => setQuizzes(quizzes)));
        console.log(quizzes);
    }, []);

    let index = 0;
    quizzes.forEach(quiz => {
        list.push(<Card quiz={quiz} index={index++}/>);
    });

    

    return (
        <div className="Homepage">
            {list}
        </div>
    );
}

export default Homepage;