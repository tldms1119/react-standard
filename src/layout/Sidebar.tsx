import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useLoginState } from "@/global/loginState";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;

    li {
        font-size: 1.5em;
        margin-top: 80px;
        padding-left: 20px;
    }
`;

type Props = {
    title: string;
    description: string;
};

/**
 * @description sidebar 컴포넌트
 */
function Sidebar({ title, description }: Props) {
    // global State
    // const [loginInfo] = useRecoilState(loginState);

    // custom hook
    const { login, setLogin } = useLoginState();

    return (
        <SidebarContainer>
            <h2>Sidebar</h2>
            <h2>{login.userId}</h2>
            <ul>
                <li>
                    {/* NavLink로 클릭 스타일 효과 줄 수 있음 */}
                    <NavLink
                        to="calculator"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        Calculator
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="counter"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        Counter
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="live-clock"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        LiveClock
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="to-do-list"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        ToDoList
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="input"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        Input
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="board"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        Board
                    </NavLink>
                </li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;
