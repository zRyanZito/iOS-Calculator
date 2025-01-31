import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    align-items: center;
`;

const CalculatorContent = styled.div`
    background-color: black;
    border: solid 0.3rem purple;
    border-radius: 2rem;
    padding: 1rem;
    height: 80%;
    width: 25%;
`

const Display = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 25%;
    box-sizing: border-box;
    color: white;
    grid-column: span 4;
`

const DisplayNumber = styled.h1`
    display: flex;
    justify-content: end;
    align-items: end;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 80%;
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
`

const InputsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 75%;
    color: white;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: .3rem;

    &.zero{
        grid-column: span 2;
    }
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: #333;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    transition: all .3s ease-in-out;
    color: white;

    &.button-zero{
        border-radius: 5rem;
    }

    &.active{
        background-color: purple;
    }

    &:hover{
        cursor: pointer;
        box-shadow: inset 10px 0px 15px 12px rgba(92, 90, 100, 0.2);
    }
`

function App() {
    const [display, setDisplay] = useState('0');
    const [backupValue, setBackupValue] = useState('0');
    const [operation, setOperation] = useState(false);
    const [result, setResult] = useState('0');
    const [insertComma, setInsertComma] = useState(false);
    const [isOperation, setIsOperation] = useState('');

    const [keymap] = useState({
        '0': () => handleClick('0'),
        '1': () => handleClick('1'),
        '2': () => handleClick('2'),
        '3': () => handleClick('3'),
        '4': () => handleClick('4'),
        '5': () => handleClick('5'),
        '6': () => handleClick('6'),
        '7': () => handleClick('7'),
        '8': () => handleClick('8'),
        '9': () => handleClick('9'),
        '+': () => handleOperation('addition'),
        '-': () => handleOperation('subtraction'),
        '*': () => handleOperation('multiply'),
        '/': () => handleOperation('division'),
        '=': () => Equality(true),
        'Enter': () => Equality(true),
        'Escape': () => Clean(),
        '.': () => handleClick('.'),
    });

    useEffect(() => {
        document.addEventListener('keypress', function (e) {
            if (keymap[e.key]) {
                keymap[e.key]();
            }
        });
    }, [keymap]);

    useEffect(() => {
        if (isOperation && parseFloat(backupValue) > 0) {
            setResult(backupValue);
        } else {
            setResult(parseFloat(display).toFixed(2));
        }
    }, [display, backupValue, isOperation]);

    const handleClick = (value: string) => {
        if (value === '.') {
            if (insertComma) return;
            setInsertComma(true);
            setDisplay(display + value);
            return;
        }

        if (!isOperation && display.length > 13) {
            alert("Número muito grande!");
            return;
        }

        if (isOperation && backupValue.length > 13) {
            alert("Número muito grande!");
            return;
        }

        if (!isOperation && parseFloat(display) < 1) {
            setDisplay(value);
            return;
        } else if (!isOperation) {
            setDisplay(display + value);
        }

        if (isOperation && parseFloat(backupValue) === 0) {
            setBackupValue(value);
            return;
        } else if (isOperation) {
            setBackupValue(backupValue + value);
        }
    };

    const handleOperation = (op: string) => {
        if (isOperation && parseFloat(backupValue) > 0) {
            Equality(false);
            setOperation(op);
            setBackupValue('0');
        }

        if (parseFloat(display) === 0) {
            alert("Digite um número!");
            return;
        }

        if (!isOperation) {
            setIsOperation(true);
            setOperation(op);
        }
    };

    const Equality = (IsClick: boolean) => {
        if (parseFloat(display) < 1) {
            alert("Digite um número!");
            return;
        }

        if (!isOperation) return;

        if (IsClick) {
            setIsOperation(false);
            setOperation('');
            setBackupValue('0');
        }

        switch (operation) {
            case "addition":
                setDisplay(String(parseFloat(backupValue) + parseFloat(display)));
                break;
            case "subtraction":
                setDisplay(String(parseFloat(display) - parseFloat(backupValue)));
                break;
            case "multiply":
                setDisplay(String(parseFloat(backupValue) * parseFloat(display)));
                break;
            case "division":
                setDisplay(String(parseFloat(display) / parseFloat(backupValue)));
                break;
            default:
                break;
        }
    };

    const Clean = () => {
        setDisplay('0');
        setBackupValue('0');
        setIsOperation(false);
        setOperation('');
        setResult('0');
        setInsertComma(false);
    };

    const buttons = [
        { label: "AC", action: Clean, className: "button-clean" },
        { label: "+/-", action: () => {}, className: "signal" },
        { label: "%", action: () => {}, className: "porcent" },
        { label: "/", action: () => handleOperation("division"), className: "operation", operation: "division" },
        { label: "7", action: () => handleClick("7"), className: "button-seven" },
        { label: "8", action: () => handleClick("8"), className: "button-eight" },
        { label: "9", action: () => handleClick("9"), className: "button-nine" },
        { label: "x", action: () => handleOperation("multiply"), className: "operation", operation: "multiply" },
        { label: "4", action: () => handleClick("4"), className: "button-four" },
        { label: "5", action: () => handleClick("5"), className: "button-five" },
        { label: "6", action: () => handleClick("6"), className: "button-six" },
        { label: "-", action: () => handleOperation("subtraction"), className: "operation", operation: "subtraction" },
        { label: "1", action: () => handleClick("1"), className: "button-one" },
        { label: "2", action: () => handleClick("2"), className: "button-two" },
        { label: "3", action: () => handleClick("3"), className: "button-three" },
        { label: "+", action: () => handleOperation("addition"), className: "operation", operation: "addition" },
        { label: "0", action: () => handleClick("0"), className: "button-zero", isZero: true },
        { label: ".", action: () => handleClick("."), className: "button-comma" },
        { label: "=", action: () => Equality(true), className: "button-equality" }
    ];    
    
    return (
        <CalculatorContainer>
            <CalculatorContent>
                <Display>
                    <DisplayNumber>
                        {result !== '' ? parseFloat(result).toLocaleString('pt-BR', { maximumFractionDigits: 10 }) : result}
                    </DisplayNumber>
                </Display>

                <InputsContainer>
                    {buttons.map((button, index) => (
                        <ButtonContainer
                            key={index}
                            className={button.isZero ? "zero" : ""}
                            onClick={button.action}
                        >
                            <Button
                                className={`${button.className} ${button.operation === operation ? "active" : ""}`}
                            >
                                {button.label}
                            </Button>
                        </ButtonContainer>
                    ))}
                </InputsContainer>
            </CalculatorContent>
        </CalculatorContainer>
    );
}

export default App;