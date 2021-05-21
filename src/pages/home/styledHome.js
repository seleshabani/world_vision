import styled from 'styled-components'

export const ContentWraper = styled.div`
    width:85%;
    height:max-content;
`
export const ContentSection = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-bottom:1rem;
`
export const ContentSectionTitle = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    & h1{
        font-weight:800;
        font-size:1rem;
    }
    & h2 a{
        text-transform:uppercase;
        text-decoration:none;
        color:${props=>props.theme.color.SectionTitle};
    }
`
export const ContentSectionSongsItems = styled.div`
    width:100%;
    /* overflow-x:hidden; */
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media screen and (max-width: 600px) {
        flex-direction:column;
        gap:.5rem;
    }
`
export const SongsItem = styled.div`
    width:20%;
    height: 250px;
    position: relative;
    & img{
        width:100%;
        height: 100%;
    }
    & .description{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;
        width:100%;
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        background:rgba(255,255,255,0.3);
        backdrop-filter:blur(5px);
        color:white;
        font-weight:800;
        & .play{
            cursor: pointer;
        }
    }
    @media screen and (max-width: 600px) {
        width:100%;
    }
`
export const ContentArtistItems = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom:2rem;
    @media screen and (max-width: 600px) {
        flex-direction:column;
        gap:.5rem;
    }
`
export const ArtistItem = styled.div`
    width:20%;
    height: 250px;
    position: relative;
    display:flex;
    align-items:center;
    align-content:center;
    justify-content:center;
    & img{
        width:90%;
        height: 90%;
    }
    &::after{
        content:'';
        left:0;
        right:0;
        top:0;
        bottom:0;
        position:absolute;
        z-index:-1;
        width:100%;
        height:100%;
        /* border:solid red; */
        background:linear-gradient(#6fe1c7,#3f8294);
    }
    @media screen and (max-width: 600px) {
        width:100%;
    }
`
export const Testimonials = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    align-content:center;
    justify-content:space-around;
    border-bottom:solid 1px #f3f3f4;
    margin-bottom:2rem;
    padding-bottom:1rem;
    @media screen and (max-width: 600px) {
        flex-direction:column;
    }
`
export const TestimonialsImg = styled.div`
    width:250px;
    height: 250px;
    border-radius:50%;
    overflow:hidden;
    & img{
        width:100%;
        height: 100%;
    }
`
export const TestimonialsContent = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    margin-bottom:1rem;
    & h2{
        font-weight:800;
    }
    @media screen and (max-width: 600px) {
        width:100%;
        text-align: justify;
    }
`