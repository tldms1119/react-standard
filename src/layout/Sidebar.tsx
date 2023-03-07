import styled from "styled-components";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;
`;

type Props = {
    sidebarText: string;
};

/**
 * @description sidebar 컴포넌트
 */
function Sidebar({ sidebarText }: Props) {
    return <SidebarContainer>{sidebarText}</SidebarContainer>;
}

export default Sidebar;
