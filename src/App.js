import Header from "./components/Header/Header";
import {Paper} from "@mui/material";
import Footer from "./components/Footer/Footer";
import Section from "./components/FirstSection/Section";
import Catigory from "./pages/Category/Catigory";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Libraries from "./pages/Libraries/Libraries";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Section />
                <Paper>
                    {/*<Header/>*/}
                    {/*<Section/>*/}
                    {/*<Catigory/>*/}
                    {/*<Footer/>*/}
                    <Routes>
                        <Route path="/" element={<Catigory to={"/home"} />} />
                        <Route path="/home" element={<Catigory />} />
                        <Route path="/home/:name" element={<Libraries />} />

                    </Routes>
                </Paper>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

// https://api.nytimes.com

export default App;
