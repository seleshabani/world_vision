import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
    body{
        padding: 0;
        margin: 0;
        font-size:15px;
    }
    body main{
        min-height:100%;
        position: relative;
        display:flex; 
        flex-direction:column; 
    }
    * img{
        width:100%;
        height: auto;
    }
    #root{
        overflow-x:hidden;
    }
`
export default GlobalStyles;