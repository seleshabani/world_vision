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
export const PlayListItem = styled.div`
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
export const Player = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 1rem;
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 100px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`
export const PlayerImg = styled.div`
    width: 90%;
    height: 100px;
    margin-bottom:1rem ;
    & img{
        width: 100%;
        height: 100%;
    }
`
export const PlayerActions = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`