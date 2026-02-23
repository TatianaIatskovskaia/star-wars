import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = ({changePage}) => {
    return (
        <nav className="fixed top-2 left-12 flex gap-4">
            {navItems.map(navItem => <NavItem changePage={changePage} key={navItem} itemTitle={navItem}/>)}
        </nav>
    );
};

export default Navigation;