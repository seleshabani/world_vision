import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavBrand, NavContainer, NavItems, NavItemsLink, NavWrapper } from './styledNav'
const Nav = () => {
    return (
        <NavWrapper>
            <NavContainer>
                <NavBrand>
                    <h1><Link to='/'>World Vision</Link></h1>
                </NavBrand>
                <NavItems>
                    <NavItemsLink>
                        ❔
                        <NavLink to="apropos">
                            A propos
                        </NavLink>
                    </NavItemsLink>
                    <NavItemsLink>
                        <i className="fa fa-users"></i>
                        <NavLink to="artistes">
                            artistes
                        </NavLink>
                    </NavItemsLink>
                    <NavItemsLink>
                        <i className="fa fa-music"></i>
                        <NavLink to="stream">
                            stream
                        </NavLink>
                    </NavItemsLink>
                </NavItems>
            </NavContainer>
        </NavWrapper>
    )
}

export default Nav
