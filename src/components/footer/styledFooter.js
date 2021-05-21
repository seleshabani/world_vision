import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    width:100%;
    height: 200px;
    background-color:black;
    display: flex;
    flex-direction:column;
    align-content:center;
    align-items:center;
    justify-content:space-between;
    margin-top: 1rem;
    /* padding:.5rem; */
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
    gap: 1.2rem;
    @media(max-width:600px){
        flex-direction:column;
        gap:.5rem;
    }
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
    height: 1rem;
    border-radius:50%;
    border:solid 1px #f3f3f4;
    color:white;
    display:flex;
    flex-direction:column;
    gap:1rem;
    justify-content:center;
    align-items:center;
    align-content:center;
    cursor: pointer;
    & a{
        color:#3f8294;
    }
`
export const FooterCopy = styled.div`
    width:85%;
    height: 50px;
    color:#f3f3f4;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-content:center;
    align-items:center;
    margin-bottom:5px;
    /* border:solid red; */
    & h6{
        font-size:.8rem;
    }
    & .dark_toggler{
        width: 100px;
        height: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        /* background-color: red; */
        color:white;
        & i{
            color: white;
        }
    }
    & a{
        color: white;
    }
`
export const FooterThemeToggler = styled.div`
    width:45px;
    height:20px;
    background-color:whitesmoke;
    border-radius:10px;
    position: relative;
    cursor: pointer;
    &::after{
        content:'';
        width:20px;
        height: 20px;
        border-radius:50%;
        background:linear-gradient(#6fe1c7,#3f8294);
        /* background:; */
        position: absolute;
        transition:all 300ms;
        transform:${({isDark})=>!isDark?'translateX(0px)':'translateX(25px)'} ;
        /* left: */
        top:0;
        bottom:0;
        
    }
`