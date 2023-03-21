import { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const ButtonContainer = styled.div`
    display: grid;
    width: 40%;
    max-width: 450px;
    height: 50%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`;

const Button = styled.button`
    background-color: #f2f3f5;
    border: none;
    color: black;
    font-size: 1.5rem;
    border-radius: 35px;
    cursor: pointer;
    box-shadow: 3px 3px 3px lightgray;

    &:active {
        margin-left: 2px;
        margin-top: 2px;
        box-shadow: none;
    }
`;

const CalButton = styled(Button)`
    font-size: 2rem;
    color: white;
    background-color: #4b89dc;
`;

const ZeroButton = styled(Button)`
    grid-column: 1/3;
`;

const InputBar = styled.input`
    width: 40%;
    max-width: 450px;
    height: 65px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 30px;
    border: 2px solid #4b89dc;
    text-align: right;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
`;

/**
 * @description 계산기 컴포넌트
 */
function Calculator() {
    // state
    const [value, setValue] = useState<string>("");

    // event
    const onClickNumber = (num: number) => {
        setValue((prevValue) => prevValue + num.toString());
    };
    const onClickAC = () => {
        setValue("");
    };
    const onClickDel = () => {
        setValue((prevValue) => prevValue.slice(0, -1));
    };
    const onClickCalc = (calc: string) => {
        setValue((prevValue) => prevValue + calc);
    };

    // view
    return (
        <MainContainer>
            <InputBar value={value} readOnly />
            <ButtonContainer>
                <Button onClick={onClickAC}>AC</Button>
                <Button onClick={onClickDel}>DEL</Button>
                <CalButton onClick={() => onClickCalc("%")}>%</CalButton>
                <CalButton onClick={() => onClickCalc("/")}>÷</CalButton>
                <Button onClick={() => onClickNumber(7)}>7</Button>
                <Button onClick={() => onClickNumber(8)}>8</Button>
                <Button onClick={() => onClickNumber(9)}>9</Button>
                <CalButton onClick={() => onClickCalc("*")}>×</CalButton>
                <Button onClick={() => onClickNumber(4)}>4</Button>
                <Button onClick={() => onClickNumber(5)}>5</Button>
                <Button onClick={() => onClickNumber(6)}>6</Button>
                <CalButton onClick={() => onClickCalc("-")}>-</CalButton>
                <Button onClick={() => onClickNumber(1)}>1</Button>
                <Button onClick={() => onClickNumber(2)}>2</Button>
                <Button onClick={() => onClickNumber(3)}>3</Button>
                <CalButton onClick={() => onClickCalc("+")}>+</CalButton>
                <ZeroButton onClick={() => onClickNumber(0)}>0</ZeroButton>
                <Button onClick={() => onClickCalc(".")}>.</Button>
                <CalButton onClick={() => onClickCalc("=")}>=</CalButton>
            </ButtonContainer>
        </MainContainer>
    );
}

export default Calculator;
