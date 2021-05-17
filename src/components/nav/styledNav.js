import styled from 'styled-components'

export const NavWrapper = styled.nav`
    width:100%;
    height:100px;
    border-bottom:solid 1px #f3f3f4;
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center;
`
export const NavContainer = styled.div`
    width:85%;
    height:80px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-content:center;
    align-items:center;
`
export const NavBrand = styled.div`
    width:15%;
    & h1{
        cursor: pointer;
        font-size:1rem;
        text-transform:uppercase;
        font-weight:800;
        letter-spacing:1px;
    }
`
export const NavItems = styled.ul`
    width:50%;
    list-style:none;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
`
export const NavItemsLink = styled.li`
    display:flex;
    flex-direction:row;
    align-content:center;
    align-items:center;
    font-weight:400;
    margin-left:10px;
    & a{
        cursor: pointer;
        color:black;
        margin-left:5px;
        text-decoration:none;
    }
`