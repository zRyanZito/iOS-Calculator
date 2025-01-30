import React from 'react';
import { useEffect, useState, useRef } from 'react';
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

const InputsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 80%;
    font-size: 1.25rem;
    color: white;
`

const Display = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 20%;
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
    color: white;

    &.button-zero{
        border-radius: 5rem;
    }

    &:hover{
        cursor: pointer;
        box-shadow: inset 10px 0px 15px 12px rgba(92, 90, 100, 0.2);
    }
`

function App() {
    const [display, setDisplay] = useState("0");
    const [backupValue, setBackupValue] = useState("0");
    const [operation, setOperation] = useState(false);
    const [validity, setValidity] = useState(true);
    const [isOperation, setIsOperation] = useState('');

    const handleClick = (value: string) => {
        if(!isOperation && parseFloat(display) < 1){
            setDisplay(value);
        }
        else if(!isOperation){
            setDisplay(display + value);
        }

        if(isOperation && parseFloat(backupValue) === parseFloat(display)){
            setBackupValue(value);
            return;
        }
        else if (isOperation){
            setBackupValue(backupValue + value);
        }
        else{
            return;
        }
    }

    const handleOperation = (operation: string) => {
        if(isOperation && validity){
            Equality();
            setValidity(false);
            return;
        }

        setBackupValue(display);
        setIsOperation(true);

        switch(operation){
            case "addition": 
                setOperation('addition');
                break;
            default:
                break;
        }
    }

    const Equality = () => {
        if(!isOperation){
            return;
        }
        else{
            switch(operation){
                case "addition":
                    setDisplay(String(parseFloat(backupValue) + parseFloat(display)));

                    break;
                default:
                    break;
            }

            setIsOperation(false);
            setValidity(true);
            setBackupValue("0");
        }
    }

    return (
        <CalculatorContainer>
            <CalculatorContent>
                <Display>
                    <DisplayNumber className="numero">
                        {
                            isOperation ? parseFloat(backupValue).toLocaleString('pt-BR') : display.length > 1 ? parseFloat(display).toLocaleString('pt-BR') : display
                        }
                    </DisplayNumber>
                </Display>
                
                <InputsContainer>
                    <ButtonContainer>
                        <Button className="button-clean">AC</Button>
                    </ButtonContainer>

                    <ButtonContainer className="signal">
                        <Button className="signal">+/-</Button>
                    </ButtonContainer>

                    <ButtonContainer className="porcent">
                        <Button className="porcent">%</Button>
                    </ButtonContainer>

                    <ButtonContainer className="division">
                        <Button className="div">/</Button>
                    </ButtonContainer>

                    <ButtonContainer className="seven" onClick={() => handleClick("7")}>
                        <Button className="button-seven">7</Button>
                    </ButtonContainer>

                    <ButtonContainer className="eight" onClick={() => handleClick("8")}>
                        <Button className="button-eight">8</Button>
                    </ButtonContainer>

                    <ButtonContainer className="nine" onClick={() => handleClick("9")}>
                        <Button className="button-nine">9</Button>
                    </ButtonContainer>

                    <ButtonContainer className="multiply">
                        <Button className="mult">x</Button>
                    </ButtonContainer>

                    <ButtonContainer className="four" onClick={() => handleClick("4")}>
                        <Button className="button-four">4</Button>
                    </ButtonContainer>

                    <ButtonContainer className="five" onClick={() => handleClick("5")}>
                        <Button className="button-five">5</Button>
                    </ButtonContainer>

                    <ButtonContainer className="six" onClick={() => handleClick("6")}>
                        <Button className="button-six">6</Button>
                    </ButtonContainer>

                    <ButtonContainer className="subtraction">
                        <Button className="sub">-</Button>
                    </ButtonContainer>

                    <ButtonContainer className="one" onClick={() => handleClick("1")}>
                        <Button className="button-one">1</Button>
                    </ButtonContainer>

                    <ButtonContainer className="two" onClick={() => handleClick("2")}>
                        <Button className="button-two">2</Button>
                    </ButtonContainer>

                    <ButtonContainer className="three" onClick={() => handleClick("3")}>
                        <Button className="button-three">3</Button>
                    </ButtonContainer>

                    <ButtonContainer className="addition">
                        <Button className="add" onClick={() => handleOperation("addition")}>+</Button>
                    </ButtonContainer>

                    <ButtonContainer className="zero" onClick={() => handleClick("0")}>
                        <Button className="button-zero">0</Button>
                    </ButtonContainer>

                    <ButtonContainer className="comma">
                        <Button className="button-comma">,</Button>
                    </ButtonContainer>

                    <ButtonContainer className="equality" onClick={Equality}>
                        <Button className="button-equality">=</Button>
                    </ButtonContainer>
                </InputsContainer>
            </CalculatorContent>
        </CalculatorContainer>  
    );
}

export default App;
