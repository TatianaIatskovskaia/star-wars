import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import StarWars from "./StarWars.jsx";
import {navItems} from "../utils/constants.js";

const Main = ({page}) => {
    switch (page) {
        case navItems[0]:
            return <Home/>;
        case navItems[1]:
            return <AboutMe/>;
        case navItems[3]:
            return <Contact/>;
        case navItems[2]:
            return <StarWars/>;
        default:
            return <Home/>;
    }
};

export default Main;