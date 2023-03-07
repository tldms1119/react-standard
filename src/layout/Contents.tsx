import styled from "styled-components";

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
    return <ContentsContainer>{contentsText}</ContentsContainer>;
}

export default Contents;
