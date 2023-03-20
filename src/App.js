import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/UI/Header/Header";
import ButtonUp from "./components/UI/buttonUp/ButtonUp";
import './styles/css/App.css'
import './styles/css/reset.css'
import Footer from "./components/UI/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <ButtonUp/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
