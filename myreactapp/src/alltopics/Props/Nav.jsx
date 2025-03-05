const Nav = (item) => {
    return (
        <div>
            <li>
                cart <sup>{item.props}</sup>
            </li>
        </div>
    );
}

export default Nav;