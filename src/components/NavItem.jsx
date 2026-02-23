const NavItem = ({itemTitle, changePage}) => {
    return (
        <div onClick={() => changePage(itemTitle)}
             className="bg-danger border rounded-md px-3 cursor-pointer hover:bg-amber-950 hover:text-amber-200">{itemTitle}</div>
    );
};

export default NavItem;