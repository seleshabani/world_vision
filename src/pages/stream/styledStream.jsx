import styled from 'styled-components';

export const PlayListWrapper = styled.div`
    width: 85%;
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    border: solid 1px #f3f3f4;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
    /* border: solid red; */
`
export const PlayListContents = styled.div`
    width: 50%;
    height: 100%;
    /* max-height: fit-content; */
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: .5rem;
    padding-left: .5rem;
    @media screen and (max-width: 600px) {
        width: 100%;
        margin-bottom: 1rem;
    }
`
export const StyledPlayListItem = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const PlayListItemImg = styled.div`
    width: 25%;
    height: 100%;
    overflow: hidden;
    & img{
        width: 100%;
        height: 100%;
    }
    cursor: pointer;
`
export const PlayListItemDetail = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color:${(props)=>props.theme.text};
    text-align: left;
    & h2{
        font-size: 1rem;
    }
    & span{
        font-size: .5rem;
    }
`
export const StyledPlayer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 1rem;
    border: solid 1px #f3f3f4;
    margin-right: 2.5%;
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 100px;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: space-between;
        margin-right: 0%;
    }
`
export const PlayerImg = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom:1rem ;
    & img{
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 600px) {
        /* width: 100%; */
        margin-top: 1rem;
        height: 90px;
    }
`
export const PlayerActions = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${(props)=>props.theme.name==='light'?'white':'black'};
    background-color: ${(props)=>props.theme.name==='light'?props.theme.text:'white'};
    padding: 1rem;
`

export const PlayerBtnPlay = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border: solid 1px ${(props)=>props.theme.color.SectionTitle};
    font-size: 1.5rem;
    cursor: pointer;
`
export const PlayerBtnsmove = styled.div`
    width: 50px;
    font-size: .8rem;
    color: ${(props)=>props.theme.color.SectionTitle};
    cursor: pointer;
`
export const StyledAudio = styled.audio`
    display: none;
`