import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    background-color: #a6f78b;
`;

type Props = {
    title: string;
    description?: string;
};

/**
 * @description Header 컴포넌트
 */
function Header({ title, description }: Props) {
    // script

    // view
    return (
        <HeaderContainer>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </HeaderContainer>
    );
}

export default Header;
