import styled from 'styled-components'

export const PageWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-content:center;
`
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
        color:#8dd1d3;
    }
`
export const ContentSectionSongsItems = styled.div`
    width:100%;
    /* overflow-x:hidden; */
    display:flex;
    flex-direction:row;
    justify-content:space-between;
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
`
export const ContentArtistItems = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
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
        width:96%;
        height: 96%;
    }
    &::before{
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
`