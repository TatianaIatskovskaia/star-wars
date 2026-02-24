import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {navItems} from "./utils/constants.js";
import {useState} from "react";
import {NavContext} from "./utils/context.js";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className='mx-2'>
            <NavContext value={{
                page, setPage
            }}>
                <Header/>
                <Main/>
                <Footer/>
            </NavContext>
        </div>
    )
}

export default App
