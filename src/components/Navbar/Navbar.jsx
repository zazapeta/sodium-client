import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import {Link} from "react-router-dom";
import withText from "../../withText.hoc";
import Style from "./Navbar.module.css";
import Flag from 'react-world-flags';

const availableLanguages = ["FR", "GB", "ES"];

class NavbarXubaka extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
            isOpen: false
        };
    }
    
    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }
    
    closeNavbar() {
        if (this.state.isOpen === true) {
            this.toggle();
        }
    }
    
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <NavbarBrand className="d-block d-md-none" href="/">
                        Sodium Cycle
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto w-100 justify-content-around " navbar>
                            <NavItem>
                                <Link
                                    to="/"
                                    onClick={this.closeNavbar}
                                    className={`nav-link ${Style.prometheus}`}
                                >
                                    {this.props.t("textNav1")}
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/Gallery"
                                    onClick={this.closeNavbar}
                                    className="nav-link"
                                >
                                    {this.props.t("textNav2")}
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/technology"
                                    onClick={this.closeNavbar}
                                    className="nav-link"
                                >
                                    {this.props.t("textNav3")}
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/who-are-we"
                                    onClick={this.closeNavbar}
                                    className="nav-link"
                                >
                                    {this.props.t("textNav4")}
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/preorder"
                                    onClick={this.closeNavbar}
                                    className="nav-link"
                                >
                                    {this.props.t("textNav5")}
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/contact"
                                    onClick={this.closeNavbar}
                                    className="nav-link"
                                >
                                    {this.props.t("textNav6")}
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {this.props.currentLang}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {availableLanguages.map(language => (
                                        <DropdownItem
                                            key={language}
                                            onClick={() => {
                                                this.props.onLangChange(language);
                                            }}
                                        >
                                            <div className="d-flex justify-content-between">
                                                <p>{language}</p>
                                                <Flag code={language} height="16" />
                                            </div>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                    <NavbarBrand className="d-none d-md-block" href="/">
                        {this.props.t("textNavBrand")}
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default withText(NavbarXubaka);
