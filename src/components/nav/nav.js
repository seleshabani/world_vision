import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBrand, NavContainer, NavItems, NavItemsLink, NavWrapper } from './styledNav'
const Nav = () => {
    return (
        <NavWrapper>
            <NavContainer>
                <NavBrand>
                    <h1>World Vision</h1>
                </NavBrand>
                <NavItems>
                    <NavItemsLink>
                        ❔
                        <NavLink to="artistes">
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
                        <NavLink to="artistes">
                            stream
                        </NavLink>
                    </NavItemsLink>
                </NavItems>
            </NavContainer>
        </NavWrapper>
    )
}

export default Nav
