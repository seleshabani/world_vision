import React,{useState} from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Footer from './components/footer/Footer';
import Nav from './components/nav/nav';
import Artistes from './pages/artistes/Artistes';
import Home from './pages/home/home';
import Apropos from './pages/apropos/apropos'
import Stream from './pages/stream/stream.jsx'
import GlobalStyles from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme/Theme';
import Actus from './pages/actus/actus';
import SingleActus from './pages/singleActus/singleActus.jsx';

const App = () => {
     const [Theme, setTheme] = useState('light');
     const location = useLocation();

    return(
        <ThemeProvider theme={Theme==='light'?lightTheme:darkTheme}>
        <GlobalStyles/>
        <span id="#top"></span>
        <Nav/>
        <main>
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path='/world_vision' component={Home}/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/artistes' component={Artistes}/>
                <Route exact path='/apropos' component={Apropos}/>
                <Route exact path='/streams' component={Stream}/>
                <Route exact path='/actus' component={Actus}/>
                <Route exact path='/single' component={SingleActus}/>
            </Switch>
            </AnimatePresence>
            <Footer onThemeChange={setTheme} theme={Theme}/>
        </main>
        </ThemeProvider>
    )
}
export default App;