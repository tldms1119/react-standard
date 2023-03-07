import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #ffce46;
`;

type Props = {
    footerText: string;
};

/**
 * @description Footer 컴포넌트
 */
function Footer({ footerText }: Props) {
    return <FooterContainer>{footerText}</FooterContainer>;
}

export default Footer;
