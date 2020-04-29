import React ,{ Component } from "react";
import {Navbar, NavItem ,Nav , NavbarBrand,
    NavbarToggler, Collapse } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen : false
        };
    }
    toggleNav()
    {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }
    render()
    {
        return(
            <div>
                Header...
                </div>
        );
    }
}
export default Header;