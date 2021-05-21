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
    & h1 a{
        cursor: pointer;
        font-size:1rem;
        text-transform:uppercase;
        text-decoration:none;
        font-weight:800;
        letter-spacing:1px;
        color:${(props)=>props.theme.text};
    }
    @media screen and (max-width: 600px) {
        width:35%;
    }
`
export const NavItems = styled.ul`
    width:50%;
    list-style:none;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    @media screen and (max-width: 600px) {
        display:none;
    }
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
        color:${(props)=>props.theme.text};
        margin-left:5px;
        text-decoration:none;
    }
`
export const NavMobileMenuToggle = styled.div`
    display:none;
    @media screen and (max-width: 600px) {
        display:flex;
        justify-content:center;
        align-items:center;
        padding:.5rem;
        cursor: pointer;
    }
`
export const MobileNavWrapper = styled.div`
    width:200px;
    height: 100%;
    position:fixed;
    z-index: 999;
    right: 0;
    top:0;
    animation:${({isVisible})=>isVisible? 'visible 300ms ease-in':'Notvisible 300ms ease'};
    display:${({isVisible})=>isVisible? 'flex':'none'};
    flex-direction:column;
    gap:1rem;
    background-color:white;
    color:black;
    padding:.5rem;
    @keyframes visible{
        from{
            opacity: 0;
            transform:translateX(200px);
        }
        to{
            opacity: 1;
            transform:translateX(0px);
        }
    }
    @keyframes Notvisible{
        from{
            opacity: 1;
            transform:translateX(0px);
        }
        to{
            opacity: 0;
            transform:translateX(200px);
        }
    }
`
export const MobileNavBrand = styled.h1`
     width:100%;
     display:flex;
     flex-direction:row;
     justify-content:space-between;
     align-items:center;
    &  a{
        width:50%;
        cursor: pointer;
        font-size:1rem;
        text-transform:uppercase;
        text-decoration:none;
        font-weight:800;
        letter-spacing:1px;
        color:black;
    }
`
export const MobileNavAction = styled.div`
    width:20%;
    padding:1rem;
    display:flex;
    justify-content:center;
    align-content:center;
    cursor: pointer;
    & a{
        color:black;
    }
`
export const MobileNavItems = styled.nav`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:1rem;
    & a{
        color:black;
    }
`