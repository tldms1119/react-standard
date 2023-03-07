import Header from "@/layout/Header";
import Sidebar from "@/layout/Sidebar";
import Contents from "@/layout/Contents";
import Footer from "@/layout/Footer";
import styled from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 240px;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <Header title="raccoon" />
                <Sidebar sidebarText="sidebar Text" />
                <Contents contentsText="contents Text" />
                <Footer footerText="footer Text" />
            </AppContainer>
        </>
    );
}

export default App;
