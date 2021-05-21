import React,{useRef, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MobileNavAction, MobileNavBrand, MobileNavItems, MobileNavWrapper, NavBrand, NavContainer, NavItems, NavItemsLink, NavMobileMenuToggle, NavWrapper } from './styledNav'
const Nav = () => {
    const mobileNavWrapperRef = useRef();
    const [mobileIsVisible,SetMobileIsVisible] = useState(false)
    return (
        <>
        <NavWrapper>
            <NavContainer>
                <NavBrand>
                    <h1><Link to='/'>World Vision</Link></h1>
                </NavBrand>
                <NavItems>
                    <NavItemsLink>
                        <i className="fa fa-newspaper"></i>
                        <NavLink to="actus">
                            actualités
                        </NavLink>
                    </NavItemsLink>
                    <NavItemsLink>
                        <i className="fa fa-music"></i>
                        <NavLink to="streams">
                            stream
                        </NavLink>
                    </NavItemsLink>
                    <NavItemsLink>
                        <i className="fa fa-users"></i>
                        <NavLink to="artistes">
                            artistes
                        </NavLink>
                    </NavItemsLink>
                    <NavItemsLink>
                        ❔
                        <NavLink to="apropos">
                            A propos
                        </NavLink>
                    </NavItemsLink>
                </NavItems>
                <NavMobileMenuToggle onClick={()=>{SetMobileIsVisible(true)}}>
                    <i className="fa fa-bars"></i>
                </NavMobileMenuToggle>
            </NavContainer>
        </NavWrapper>
        <MobileNavWrapper ref={mobileNavWrapperRef} isVisible={mobileIsVisible}>
            <MobileNavBrand>
                <Link to="/">
                    world vision
                </Link>
                <MobileNavAction onClick={()=>{SetMobileIsVisible(false)}}>
                    <i className="fa fa-times"></i>
                </MobileNavAction>
            </MobileNavBrand>
            <MobileNavItems>
                <Link to="/actus">
                    actualités
                </Link>
                <Link to="/streams">
                    streaming
                </Link>
                <Link to="/artistes">
                    artistes
                </Link>
                <Link to="/apropos">
                    a propos
                </Link>
            </MobileNavItems>
        </MobileNavWrapper>
        </>
    )
}

export default Nav
