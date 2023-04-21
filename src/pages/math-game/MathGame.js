import {useState} from "react";
import "./styles-math-game.css";
import correctImg from "./imgs/plato-correct.jpg";
import wrongImg from "./imgs/plato-wrong.jpg";

const operandVariants = ["+", "-", "*"];

function randomOperand(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomOperand = () => operandVariants[randomOperand(0, 2)];
const randomNumber = () => randomOperand(0, 10);

const calculate = (n1, n2, operand) => {
  if (operand === "+") return n1 + n2;
  if (operand === "-") return n1 - n2;
  if (operand === "*") return n1 * n2;
}

function MathGame() {
  const n1Initial = randomNumber();
  const n2Initial = randomNumber();
  const operandInitial = getRandomOperand();

  const [n1, setN1] = useState(n1Initial);
  const [operand, setOperand] = useState(operandInitial);
  const [n2, setN2] = useState(n2Initial);
  const [answer, setAnswer] = useState();
  const [resolution, setResolution] = useState({verdict: "", notification: "", img: ""});
  const [counter, setCounter] = useState({correct: 0, inCorrect: 0});
  const [conditionOfAnswer, setConditionOfAnswer] = useState(true);


  const shake = () => {
    const n1 = randomNumber(), n2 = randomNumber(), operand = getRandomOperand();
    setOperand(operand);
    setN1(n1);
    setN2(n2);
  }

  const check = () => {
    const checkRes = calculate(n1, n2, operand);
    if (answer === checkRes) {
      setResolution({
        ...resolution,
        verdict: "Correct",
        img: correctImg,
        notification: "Congrats! You are the man, keep doing what you doing and you become the best math counter in universe (or at least in your room...)"
      })
      setCounter({...counter, correct: counter.correct + 1})
    } else {
      setResolution({
        ...resolution,
        verdict: "Incorrect",
        img: wrongImg,
        notification: "Sorry, but you was wrong. You better be training more with the numbers and come back or continue and get your result much worst. The choose is yours..."
      })
      setCounter({...counter, inCorrect: counter.inCorrect + 1})
    }
    setConditionOfAnswer(!conditionOfAnswer);
    shake();
    setAnswer("");
  }

  return (
    <div className={(resolution.verdict !== "Incorrect") ? "mathApp" : "mathApp2"}>
      <div className="whole">
        <div className="title">
          Let"s play my friend!
        </div>
        <div className="descriptOfTask">
          Here we"ll trying to check your deep knowledge of math. Get ready,
          cuz it"s gonna be a blood bath.
        </div>
        <div id="expressionBlock">
          <button onClick={shake} className="shakeBut">
            Shake
          </button>
          <div className="expression">
            {n1} {operand} {n2} =
          </div>
          <input type="number" value={answer} onChange={e => setAnswer(+e.target.value)}
                 className="answerInput"/>
          <button onClick={check}>
            Check
          </button>
        </div>
        <div className={(conditionOfAnswer) ? "none" : "loud"}>
          <div className={(conditionOfAnswer) ? "none" : "onBoard"}>
            <div className={(conditionOfAnswer) ? "none" : "readyVerdict"}>
              {resolution.verdict}
            </div>
            <div className={(conditionOfAnswer) ? "none" : "mainBoard"}>
              <p>
                {resolution.notification}
              </p>
              <img src={resolution.img} alt="error"/>
              <p className={(conditionOfAnswer) ? "none" : "exitShower"} onClick={() => {
                setConditionOfAnswer(!conditionOfAnswer);
                setResolution({...resolution, verdict: "", notification: "", img: ""})
              }}>X
              </p>
            </div>
          </div>
        </div>
        <div id="score">
          <p className="titleOfScoreBoard">
            Your score:
          </p>
          <div className="scoreTable">
            <div className="correctAnswers">
              <p>
                Correct answers
              </p>
              <p className="amountOfRights">
                {counter.correct}
              </p>
            </div>
            <div className="wrongAnswers">
              <p>
                Wrong answers
              </p>
              <p className="amountOfWrongs">
                {counter.inCorrect}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MathGame;