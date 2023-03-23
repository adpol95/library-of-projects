import Controls from "./Controls";
import './styles-calculator.css';

function Calculator() {
    const buttonsRef = ['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '-', '0', '.', '^', '+'];

    const initialValue = {
        id: Math.floor(Math.random() * 100 + 1),
        count: '',
        count2: '',
        sign: '',
        resultCount: 0,
        resultStyle: 'resultCount'
    };

    return (
        <div className='bodyCalc'>
            <Controls buttonsRef={buttonsRef} initialValue={initialValue}/>
        </div>
    );
}

export default Calculator;