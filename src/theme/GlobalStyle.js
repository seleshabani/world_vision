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
    #root{
        overflow-x:hidden;
    }
`
export default GlobalStyles;