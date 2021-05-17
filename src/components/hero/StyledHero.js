import styled from 'styled-components'

export const HeroWrapper = styled.div`
    width:100%;
    height:calc(100vh - 350px);
    display:flex;
    flex-direction:row;
`
export const HeroAction = styled.div`
    width:40%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    position: relative;
    /* &::after{
        content:'';
        width:70px;
        height:100%;
        position: absolute;
        right:0;
        top:0;
        background-color:white;
        transform:skewX(-20deg) translateX(40px);
        z-index:999;
    } */
    & h1{
        font-weight:800;
        font-size:2rem;
        
    }
    & h2{
        font-weight:400;
        font-size:1rem;
        color:#757575;
        margin-bottom:1rem;
        /* transform:skewX(20deg); */
    }
`
export const HeroImg = styled.div`
   
    width:60%;
    height:90%;
    position:relative;
    /* border:solid red; */
    & img{
        width:100%;
        height:100%;
    }
    &::before{
        content:'';
        width:100px;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        background-color:white;
        transform:skewX(-20deg) translateX(-50px);
        z-index:999;
    }
    &::after{
        content:'';
        width:90%;
        height: 100%;
        position: absolute;
        top:10px;
        left: 20px;
        right:0;
        /* transform:translateX(-10px); */
        background:linear-gradient(#6fe1c7,#3f8294);
        z-index:-1;
    }
`