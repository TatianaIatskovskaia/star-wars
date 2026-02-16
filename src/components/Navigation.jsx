import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = ({changePage}) => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav gap-2">
                {navItems.map(navItem => <NavItem changePage={changePage} key={navItem} itemTitle={navItem}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;