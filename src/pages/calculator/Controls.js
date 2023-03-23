import {useState} from "react";
import "./styles-calculator.css";

const inputFilter = (event) => {
    const input = event.target.value;
    // eslint-disable-next-line no-mixed-operators
    if (input.startsWith("0") && !input.includes(".") || input.startsWith("+") || input.startsWith("-") || input.startsWith("/") || input.startsWith("*") || input.startsWith("^")) return input.slice(1);
    else if (input.endsWith("+") || input.endsWith("-") || input.endsWith("/") || input.endsWith("*") || input.endsWith("^")) return input.slice(-1);
    else return input;
}

const calculate = (operand, n1, n2) => {
    if (operand === "+") return +n1 + +n2;
    if (operand === "-") return +n1 - +n2;
    if (operand === "/") return +n1 / +n2;
    if (operand === "*") return +n1 * +n2;
    if (operand === "^") return Math.pow(+n1, +n2);
}

function Controls(props) {
    const [value, setValue] = useState(props.initialValue);

    const buttonClick = (el) => {
        const res = value.resultCount;
        if (value.sign) setValue({
            ...value,
            count2: el === "." || !isNaN(el) ? value.count2 + el : value.count2,
            resultCount: isNaN(res[res.length - 1]) && !res.endsWith(".") ? el : res + el
        })
        else setValue({
            ...value,
            count: el === "." || !isNaN(el) ? value.count + el : value.count,
            sign: isNaN(el) && el !== "." ? el : value.sign,
            // eslint-disable-next-line no-mixed-operators
            resultCount: res === 0 || isNaN(el) && el !== "." ? el : res + el
        })
    }

    const result = () => {
        if (value.sign) setValue({
            ...value,
            resultCount: calculate(value.sign, value.count, value.count2),
            resultStyle: "resultCountRed"
        })
    }

    const clearCount = () => {
        setValue(props.initialValue)
    }

    const inputCount = (e) => {
        const inputReady = inputFilter(e)
        if (value.sign) setValue({
            ...value,
            count2: !isNaN(inputReady) || inputReady.includes(".") ? inputReady : value.count2,
            resultCount: inputReady
        })
        else setValue({
            ...value,
            count: !isNaN(inputReady) || inputReady.includes(".") ? inputReady : value.count,
            sign: isNaN(inputReady) ? inputReady : value.sign,
            resultCount: inputReady
        })
    }
    return (
        <div className="mainSection">

            <div id="display">

                <button onClick={clearCount} className={"clearBut"}>
                    Clear
                </button>

                <input
                    value={value.resultCount}
                    className={value.resultStyle}
                    onChange={inputCount}
                />

                <button onClick={result} className={"resButton"}>
                    Result
                </button>

            </div>

            <div id="typing">
                    <div className="rowOfButtons">
                        {props.buttonsRef.filter((el, i) => i >= 8 && i < 12).map((el, i) =>
                            <button onClick={() => buttonClick(el)} key={i}>
                                {el}
                            </button>)}
                    </div>
                    <div className="rowOfButtons">
                        {props.buttonsRef.filter((el, i) => i >= 4 && i < 8).map((el, i) =>
                            <button onClick={() => buttonClick(el)} key={i}>
                                {el}
                            </button>
                        )}
                    </div>
                    <div className="rowOfButtons">
                        {props.buttonsRef.filter((el, i) => i < 4).map((el, i) =>
                            <button onClick={() => buttonClick(el)} key={i}>
                                {el}
                            </button>
                        )}
                    </div>
                    <div className="rowOfButtons">
                        {props.buttonsRef.filter((el, i) => i >= 12).map((el, i) =>
                            <button onClick={() => buttonClick(el)} key={i}>
                                {el}
                            </button>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default Controls