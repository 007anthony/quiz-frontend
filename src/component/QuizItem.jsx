import { createRef, useEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton";
import Button from "./Button";
import { render } from "react-dom";
import Quiz from "./Quiz";

function QuizItem(props) {

    const [selectedList, setSelectedList] = useState(props.question.answers.map(() => false));
    const [rightAnswer, setRightAnswer] = useState(null);

    const onClick = index => setSelectedList(selectedList.map((_, i) => index === i));

    const ref = createRef();
    const [answers, setAnswers] = useState(props.question.answers.map((answer, i) => <ToggleButton key={i} value={answer} selected={selectedList[i]} onClick={(e) => onClick(i)}  isRight={null}/>));


    useEffect(() => {

        setAnswers(props.question.answers.map((answer, i) => <ToggleButton key={i} value={answer} selected={selectedList[i]} onClick={(e) => onClick(i)} isRight={rightAnswer != null?answer === rightAnswer: null}/>));

    }, [selectedList, rightAnswer]);


    const submit = () => {
        console.log(selectedList);
        for(let i = 0; i < selectedList.length; i++) {
            if(selectedList[i]) {
                fetch("http://localhost:8080/game/" + props.id, {
                    method: "POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify({
                        "question": props.question.question,
                        "answer": props.question.answers[i]
                    })
                }).then((response) => response.json()).then((answer) => setRightAnswer(rightAnswer));
            }
        }

    }

    return(
        <div className="QuizItem">
            <div className="title">{props.question != null?props.question.question: null}</div>
            <div className="answers">
                {answers}
            </div>
            <Button value="Submit" onClick={submit}/>
        </div>
    );
}

export default QuizItem;