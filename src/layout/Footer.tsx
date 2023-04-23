import styled from "styled-components";
import { useLoginState } from "@/global/loginState";

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
    // global State
    // const [loginInfo] = useRecoilState(loginState);

    // custom Hook
    const { login, setLogin } = useLoginState();
    return (
        <FooterContainer>
            <h2>
                {footerText}
                <p>{login.userId}</p>
            </h2>
        </FooterContainer>
    );
}

export default Footer;
