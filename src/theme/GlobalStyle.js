import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    html{
        box-sizing: inherit;
        scroll-behavior: smooth;
    }
    body{
        padding: 0;
        margin: 0;
        font-size:15px;
        background-color:${({theme})=>theme.body};
        color:${({theme})=>theme.text};
    }
    body main{
        min-height:100%;
        position: relative;
        display:flex; 
        flex-direction:column; 
        /* z-index: -999; */
    }
    * img{
        width:100%;
        height: auto;
    }
    #root{
        /* overflow-x:hidden; */
    }
`
export default GlobalStyles;