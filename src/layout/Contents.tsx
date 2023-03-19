import styled from "styled-components";
import Counter from "@/components/Counter";
import Input from "@/components/Input";

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
            {contentsText}
            <Counter />
            <Input />
        </ContentsContainer>
    );
}

export default Contents;
