import styled from 'styled-components';

export const SliderArea = styled.div`
    width:85%;
    height: 350px;
    margin-bottom:2rem;
    & > div{
        background-origin:content;
        width:100%;
        height:100% ;
    }
`
export const ContentSection = styled.div`
    width:85%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
export const ActusItems = styled.div`
    width:70%;
    display:flex;
    flex-direction:column;
    gap:1rem;
    /* border:solid red; */
    margin-bottom:1rem;
    padding:.5rem;
    @media screen and (max-width: 600px) {
        width:100%;
    }
`
export const CSectionTitle = styled.h2`
    font-size:1rem;
    border-bottom:solid ${props=>props.theme.color.SectionTitle};
    color:${props=>props.theme.text};
    width:max-content;
    padding-right:5px;
    margin-bottom:1rem;
`
export const Actuitem = styled.div`
    width:100%;
    height: 200px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color:${(props)=>props.theme.body};
    margin-bottom: 1.5rem;
    /* box-shadow: 10px 5px 5px black; */
    & .img{
        width:25%;
        height: 100%;
        & img{
            width:100%;
            height: 100%;
        }
    }
    & .content{
        width:60%;
    }
    & a{
        color:${(props)=>props.theme.text};
        text-decoration:none;
    }
    @media screen and (max-width: 600px) {
        flex-direction:column;
        width:100%;
        height: 300px;
        & .img{
        width:100%;
        height: 80%;
        & img{
            width:100%;
            height: 100%;
        }
    }
    & .content{
        width:100%;
    }
    }
`