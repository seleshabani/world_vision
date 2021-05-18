import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    /* position: absolute; */
    width:100%;
    height: 200px;
    bottom:0;
    background-color:black;
    margin-top:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const FooterContent = styled.div`
    width:85%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`
export const FooterBrand = styled.h2`
    color:white;
    font-weight:800;
    width:15%;
`
export const FooterItems = styled.ul`
    width:40%;
    display:flex;
    flex-direction:row;
    align-items:center;
    list-style:none;
`
export const FooterItemsItem = styled.li`
    width:15%;
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:.5rem;
    color:white;
    & a{
        color:white;
        text-transform:none;
        text-decoration:none;
    }
`
export const FooterAction = styled.div`
    padding:.5rem;
    width:1rem;
    height: 2rem;
    border-radius:50%;
    border:solid 1px #f3f3f4;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center;
    cursor: pointer;
`
export const FooterCopy = styled.div`
    width:100%;
    height: 50px;
    color:#f3f3f4;
    & h6{
        font-size:.5rem;
    }
`