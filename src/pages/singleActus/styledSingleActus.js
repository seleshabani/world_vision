import styled from 'styled-components'

export const NewsImgWrapper = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 2rem;
    & img{
        width: 100%;
        height: 100%;
    }
`
export const NewsContentWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: .5rem;
    & h1{
        text-align: left;
        color: ${(props)=>props.theme.text};
    }
    & .content{
        text-align: justify;
        color: ${(props)=>props.theme.text};
    }
`
