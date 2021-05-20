import styled from 'styled-components';

export const Button = styled.div`
    width:max-content;
    border-radius:10px;
    padding:10px;
    display:flex;
    justify-content:center;
    align-content:center;
    align-items:center;
    color:white;
    background:${ ({bgck})=> bgck };
    cursor: pointer;
`
export const PageWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    align-items:center;
`