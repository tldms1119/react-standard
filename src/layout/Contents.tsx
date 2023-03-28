import styled from "styled-components";
import Counter from "@/components/Counter";
import Input from "@/components/Input";
import Calculator from "@/components/Calculator";
import Popup from "@/components/Popup";
import LiveClock from "@/components/LiveClock";
import TodoList from "@/components/ToDoList";

const ContentsContainer = styled.main`
    height: 100%;
    background-color: #ffffff;
`;

type Props = {
    contentsText: string;
};

/**
 * @description Contents 컴포넌트
 */
function Contents({ contentsText }: Props) {
    return (
        <ContentsContainer>
            {/* {contentsText}
            <Counter />
            <Input /> */}
            {/* <Calculator /> */}
            <Popup content="팝업 내용" btnTitle="버튼 내용" />
            <hr />
            <LiveClock />
            <hr />
            <TodoList />
        </ContentsContainer>
    );
}

export default Contents;
