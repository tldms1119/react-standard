import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;

    li {
        font-size: 1.5em;
        margin-top: 100px;
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
    return (
        <SidebarContainer>
            <h2>Sidebar</h2>
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
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;
